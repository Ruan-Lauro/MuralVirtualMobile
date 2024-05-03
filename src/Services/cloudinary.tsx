import { AdvancedImage, UploadApiOptions, upload } from 'cloudinary-react-native';
import { Cloudinary } from '@cloudinary/url-gen';

type response =  {
    access_mode: string;
    asset_id: string;
    bytes: number;
    created_at: Date;
    etag: string;
    existing: boolean;
    folder: string;
    format: string;
    height: number;
    original_filename: string;
    placeholder: boolean;
    public_id: string;
    resource_type: string;
    secure_url:string;
    signature: string;
    tags: [];
    type: string;
    url: string;
    version: number;
    version_id: string;
    width: number;
  }

export default async function cloudinary(uri:string){

    const cld = new Cloudinary({
        cloud: { 
            cloudName: 'dfmdiobwa' 
        },
        url: { 
            secure: true
        }
    });
    
    const options = {
        upload_preset: 'ml_default',
        unsigned: true,
    }
    
    return new Promise((resolve, reject) => {
        upload(cld, { file: uri, options: options, callback: (error: any, response: any) => {
            if (error) {
                console.error("Erro no upload:", error);
                reject(error);
            } else {
                console.log("Upload bem-sucedido:", response);
                resolve(response);
            }
        }});
    });
    
}









