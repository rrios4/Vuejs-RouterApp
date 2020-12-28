import axios from 'axios';

const url = 'http://localhost:5000/afcresults';

class AFCService {
    static getAFC(){
        return new Promise((resolve, reject) => {
            axios.get(url).then((res) => {
                const data = res.data;
            resolve(
                data.map(afc => ({
                    ...afc
                }))
            )
            })
            .catch((err) => {
                reject(err);
            })
        });
    }
    static getEast(){
        
    }
}
console.log(AFCService.getAFC())
export default AFCService