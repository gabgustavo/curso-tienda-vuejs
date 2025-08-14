<template>
    <div>
        <Sidebar />
        <div class="main-content">

            <TopNav />

            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col-12 col-lg-10 col-xl-8">

                        <!-- Header -->
                        <div class="header mt-md-5">
                            <div class="header-body">
                                <div class="row align-items-center">
                                    <div class="col">

                                        <!-- Pretitle -->
                                        <h6 class="header-pretitle">
                                            Colaboradores
                                        </h6>

                                        <!-- Title -->
                                        <h1 class="header-title">
                                            Nuevo colaborador
                                        </h1>

                                    </div>
                                </div> <!-- / .row -->
                                <div class="row align-items-center">
                                    <div class="col">

                                        <!-- Nav -->
                                        <ul class="nav nav-tabs nav-overflow header-tabs">
                                            <li class="nav-item">
                                                <a href="account-general.html" class="nav-link active">
                                                    Todos los colaboradores
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="account-billing.html" class="nav-link">
                                                    Nuevo colaborador
                                                </a>

                                            </li>

                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Form -->
                        <form @submit.prevent="onSubmit">



                            <div class="row">
                                <div class="col-12 col-md-6">

                                    <!-- First name -->
                                    <div class="form-group">

                                        <!-- Label -->
                                        <label class="form-label">
                                            Nombres
                                        </label>

                                        <!-- Input -->
                                        <input type="text" class="form-control" v-model="colaborador.nombres">

                                    </div>

                                </div>
                                <div class="col-12 col-md-6">

                                    <!-- Last name -->
                                    <div class="form-group">

                                        <!-- Label -->
                                        <label class="form-label">
                                            Apellidos
                                        </label>

                                        <!-- Input -->
                                        <input type="text" class="form-control" v-model="colaborador.apellidos">

                                    </div>

                                </div>
                                <div class="col-12">

                                    <!-- Email address -->
                                    <div class="form-group">

                                        <!-- Label -->
                                        <label class="mb-1">
                                            Correo electrónico
                                        </label>

                                        <!-- Form text -->
                                        <small class="form-text text-muted">
                                            This contact will be shown to others publicly, so choose it carefully.
                                        </small>

                                        <!-- Input -->
                                        <input type="email" class="form-control" v-model="colaborador.email">

                                    </div>

                                </div>

                                <div class="col-12 col-md-6">

                                    <!-- Birthday -->
                                    <div class="form-group">

                                        <!-- Label -->
                                        <label class="form-label">
                                            Cargo
                                        </label>

                                        <!-- Input -->
                                        <select name="" class="form-select" v-model="colaborador.rol">
                                            <option value="" selected disabled >-- Seleccionar --</option>
                                            <option value="Administrador">Administrador</option>
                                            <option value="Vendedor">Vendedor</option>
                                            <option value="Inventariado">Inventariado</option>
                                        </select>
                                    </div>

                                </div>

                            </div> <!-- / .row -->

                            <!-- Divider -->




                            <hr class="my-5">

                            <!-- Button -->
                            <button class="btn btn-primary">
                                Guardar
                            </button>


                        </form>

                        <br><br>

                    </div>
                </div> <!-- / .row -->
            </div>

        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import { backendApi } from '@/api/backendApi';
import Sidebar from '@/components/SideBar.vue';
import TopNav from '@/components/TopNav.vue';

export default {
    name: 'CreateColaboradorApp',
    data() {
        return {
            colaborador: {},
        };
    },
    methods: {
        async onSubmit() {
            if (
                !this.colaborador.nombres ||
                !this.colaborador.apellidos ||
                !this.colaborador.email || !this.colaborador.rol
            ) {
                this.$notify({
                    title: "Error!",
                    text: "Toda la información es requerida",
                    type: 'error',
                });
                return;
            }
            
            try {
                this.colaborador.password = '123456';
                const { data } = await backendApi.post('/user-register', this.colaborador);
                this.$notify({
                    title: "Perfecto!!!",
                    text: data.message,
                    type: 'success',
                });
                this.colaborador = {};
                
                
            } catch (error) {                
                this.$notify({
                    title: "Error!",
                    text: error.response.data.message,
                    type: 'error',
                });
            }
        }
    },
    components: {
        Sidebar,
        TopNav
    }
}
</script>
