import axios from 'axios'

export default {
	 uploadImg(file,path){
	 	 let data = new FormData()
     	 data.append('files', file)
     	 data.append('path', path)
	    return axios.post('/upload',data, {
        headers: {'Content-Type': 'multipart/form-data'}
      }).then(function (response) {return response.data})
	 }
}