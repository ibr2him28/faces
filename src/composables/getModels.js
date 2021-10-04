import {ref} from 'vue'
import {projectFirestore} from '../firebase/config'

const getModels = () => {
    const models = ref ([])
    const error  = ref(null)

    const load = async () => {
        try {
            const res = await projectFirestore.collection('models').get()
            models.value = res.docs.map(doc => {
                return { ...doc.data(), id: doc.id}
            })
        }
        catch (err){
            error.value = err.message
            console.log(error.value)
        }
    }
    return {models, error, load}
}
export default getModels