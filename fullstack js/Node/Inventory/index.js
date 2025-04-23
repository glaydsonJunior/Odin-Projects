
const psql = require('./db.js').db
const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'));

const filterCategory = (filter='')=>{
    if(filter==''){
        return 'SELECT product_name, price, product_info, category_name FROM products JOIN categories ON products.product_category = categories.id'
    }
    return `SELECT product_name, price, product_info, category_name FROM products JOIN categories ON products.product_category = categories.id WHERE category_name = '${filter}'`
}

const getCategories = ()=>{
    return 'SELECT * FROM categories'
}

const generateUpdateProductQuery = (form, productQuery)=>{
    const generated = {}
    generated.product_name = (form.product_name=='')?productQuery.product_name:form.product_name
    generated.product_price = (form.product_price=='')?productQuery.price:form.product_price
    generated.product_info = (form.product_info=='')?productQuery.product_name:form.product_name
    generated.product_category = form.product_category
    return `UPDATE products SET product_name = '${generated.product_name}', price = ${generated.product_price}, product_info = '${generated.product_info}', product_category = ${generated.product_category} WHERE product_name = '${productQuery.product_name}'`
}

app.get('/', async (req, res)=>{
    const prd = filterCategory(req.query.category)
    const cat = getCategories()
    const responseProduct = await psql.query(prd).then(r=>{return r.rows})
    const responseCategories = await psql.query(cat).then(r=>{return r.rows})
    res.render('index', {products:responseProduct, categories: responseCategories})
})

app.post('/add/product', (req, res)=>{
    const formBody = req.body
    const q = `INSERT INTO products(product_name, price, product_info, product_category) VALUES ('${formBody.product_name}', ${formBody.product_price}, '${formBody.product_info}', ${formBody.product_category})`
    psql.query(q)
    res.redirect('/')
})



app.post('/delete/product', (req, res)=>{
    const qProduct = req.body.selected_product
    psql.query(`DELETE FROM products WHERE product_name = '${qProduct}'`)
    res.redirect('/')
})


app.post('/update/product', async(req, res)=>{
    const r = await psql.query(`select * from products WHERE product_name = '${req.body.selected_product}' `).then(response=>{return response.rows[0]})
    const updateQuery = generateUpdateProductQuery(req.body, r)
    psql.query(updateQuery)
    res.redirect('/')
})




app.get('/categories', async (req, res)=>{
    const categories = await psql.query('SELECT * FROM categories').then(r => {return r.rows})
    res.render('category', {categories:categories})
})

app.post('/category/add', (req, res)=>{
    const newCategoryName = req.body.category_name
    psql.query(`INSERT INTO categories(category_name) VALUES ('${newCategoryName}')`)
    res.redirect('/categories')
})

app.post('/category/update', (req, res)=>{
    const q = `UPDATE categories SET category_name = '${req.body.new_name}' WHERE category_name = '${req.body.category_selected}'`
    psql.query(q)
    res.redirect('/categories')
})

app.post('/category/delete', (req, res)=>{
    const qProducts = `DELETE FROM products WHERE product_category = ${req.body.category_selected};`
    const qCategories = `DELETE FROM categories WHERE id = ${req.body.category_selected};`
    psql.query(qProducts)
    psql.query(qCategories)
    res.redirect('/categories')
})

app.listen(8000)