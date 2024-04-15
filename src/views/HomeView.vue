<script setup>
    import usePropiedades from '@/composables/usePropiedades';
    import { propertyPrice } from '@/helpers';
    import Propiedad from '../components/Propiedad.vue';

    const {alberca, propiedadesFilter } = usePropiedades()


</script>

<template>
    <h1 class="text-center text-h3 font-weight-bold my-5">Nuestras Propiedades</h1>

    <v-card flat class="py-10" >
        <v-card-title class="text-h5" >
            Búsqueda
            <v-checkbox label="Alberca" v-model="alberca"></v-checkbox>
        </v-card-title>
        <v-row>
            <propiedad
                v-for="propiedad in propiedadesFilter"
                :key="propiedad.id"
                :propiedad="propiedad"
                :price="propertyPrice"
            />
        </v-row>
    </v-card>
</template>
