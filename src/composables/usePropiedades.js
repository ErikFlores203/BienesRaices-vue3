
import { collection } from 'firebase/firestore';
import { computed, ref } from 'vue';
import { useFirestore, useCollection } from 'vuefire';

export default function usePropiedades() {
    const alberca = ref(false)


    const db = useFirestore()
    const propiedadesCollection = useCollection(collection(db,'propiedades'))

    const propiedadesFilter = computed(() =>{
        return alberca.value ?
            propiedadesCollection.value.filter(propiedad => propiedad.alberca) :
            propiedadesCollection.value
    })

    return {
        alberca,
        propiedadesFilter,
        propiedadesCollection
    }
}