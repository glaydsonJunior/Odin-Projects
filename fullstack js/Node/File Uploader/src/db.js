import { PrismaClient } from "./generated/prisma/client.js"


export class UserService{
    constructor(){
        this.prisma = new PrismaClient()
    }

    async registerUser(e, u, p){
        await this.prisma.users.create({
            data:{
                email: e,
                username: u,
                password: p
            }
        })
    }

    async getUser(e, p){
        const acc = await this.prisma.users.findFirst({
            where:{
                email: e,
                password: p
            },
            select:{
                email: true,
                username: true,
                password:true
            }

        })
        return acc
    }

    async addFolder(name, email){
        await this.prisma.folders.create({
            data:{
                folder_name: name,
                account_email: email
            }
        })
    }

    async getFolders(email){
        const folders = await this.prisma.folders.findMany({
            where:{
                account_email: email
            },
            select:{
                folder_name: true,
            },
            orderBy:{
                folder_name: 'asc'
            }
        })
        return folders
    }

    async getFiles(email, folderName){
        const files = await this.prisma.folders.findFirst({
            where:{
                folder_name: folderName,
                account_email: email
            },
            select:{
                id: true,
                folder_name: true,
                file: true
            }
        })
        return files
    }

    async addFile(email, folderName, filename) {
            const folder = await this.prisma.folders.findFirst({
              where: {
                folder_name: folderName,
                account_email: email,
              },
            });
          
            if (!folder) {
              console.log('Pasta não encontrada para o usuário especificado.');
              return;
            }
          
            const newFile = await this.prisma.files.create({
              data: {
                filename: filename,
                folder_file: {
                  connect: { id: folder.id },
                },
              },
            });
          
            console.log('Arquivo adicionado com sucesso:', newFile);
          }


    async deleteFolder(folderId) {
        
        await this.prisma.files.deleteMany({
            where:{
                folder_location: folderId
            }
        })

        await this.prisma.folders.delete({
            where: {
                id: folderId
            }
        })
    }


    async renameFolder(folderId, newName){
        await this.prisma.folders.update({
            where:{
                id: folderId
            },
            data: {
                folder_name: newName
            }
        })
    }
}