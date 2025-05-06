import { PrismaClient } from "../generated/prisma/client.js";



export class ApiService{

    constructor(){
        this.prisma = new PrismaClient()
    }


    //ACCOUNTS QUERIES

    async registerUser(username, password){
        await this.prisma.users.create({
            data:{
                username: username,
                password: username
            }
        })
    }


    async getUser(username, password){
        const resultUser = await this.prisma.users.findFirst({
            where:{
                username: username,
                password: password
            }
        })
        return resultUser
    }


    //POST QUERIES

    async getAllPosts(){
        const postsResult = await this.prisma.posts.findMany({
            select:{
                title: true,
                filename: true,
                date: true,
                published: true
            },
            orderBy: {
                date: 'asc'
            }
        })
        return postsResult
    }

    async getAllPostsPublished(){
        const postsResult = await this.prisma.posts.findMany({
            select:{
                title: true,
                filename: true,
                date: true,
                published: true
            },
            orderBy: {
                date: 'asc'
            },
            where:{
                published: true
            }
        })
        return postsResult
    }


    async addPost(title, filename){
        await this.prisma.posts.create({
            data:{
                title: title,
                filename: filename
            }
        })
    }




    async getPosterDetails(title){
        const postResult = await this.prisma.posts.findFirst({
            select:{
                title:true,
                filename:true,
                date: true,
                comments: {
                    select: {
                        user_id: {
                            select: {
                                username: true
                            },
                        },
                        content: true,
                        date: true
                    }
                },
            },
            where:{
                title: title
            }
        })

        if(postResult != null){
            const transformedComments = postResult.comments.map(comment => ({
                user: comment.user_id.username,
                content: comment.content,
                date: comment.date
            }));
            postResult.comments = transformedComments
        }
        
        return postResult
    }


    async getPostIdByTitle(title){
        const resultID = await this.prisma.posts.findUnique({
            select:{
                id:true
            },
            where: {
                title: title
            }
        })
        return resultID
    }

    async changeViewPost(title, action){
        if(action === 'on' || action === 'off'){
            await this.prisma.posts.update({
                where:{
                    title: title
                },
                data:{
                    published: (action === 'on')?true:false
                }
            })
            return true
        }
        return false
    }




    //COMMENTS QUERIES

    async createComment(pId, uId, content){
        await this.prisma.comments.create({
            data:{
                postId: pId,
                userId: uId,
                content: content
            }
        })
    }



}