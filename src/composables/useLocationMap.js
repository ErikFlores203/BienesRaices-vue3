import { ref } from 'vue';

export default function useLocationMap() {
    const zoom = ref(5)
    const center = ref([24.2462426,-103.6708746]) 

    function pin (e){
        const marker = e.target.getLatLng()
        center.value = [marker.lat, marker.lng]

    }
    return {
        center,
        zoom,
        pin
    }
}