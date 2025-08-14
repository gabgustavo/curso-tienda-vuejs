<template>
    <div>
        <Sidebar />
        <div class="main-content">

            <nav class="navbar navbar-expand-md navbar-light d-md-flex">
                <div class="container-fluid">

                <!-- Form -->
                <form class="form-inline me-4 d-none d-md-flex">
                    
                </form>

                <!-- User -->
                <div class="navbar-user">


                    <!-- Dropdown -->
                    <div class="dropdown">

                    <!-- Toggle -->
                    <a href="#" class="avatar avatar-sm avatar-online dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img src="/assets/img/avatar-1.jpg" alt="..." class="avatar-img rounded-circle" style="-webkit-mask-image: none;">
                    </a>

                    <!-- Menu -->
                    <div class="dropdown-menu dropdown-menu-end">
                        <a href="./profile-posts.html" class="dropdown-item">Profile</a>
                        <a href="./account-general.html" class="dropdown-item">Settings</a>
                        <hr class="dropdown-divider">
                        <a href="./sign-in.html" class="dropdown-item">Logout</a>
                    </div>

                    </div>

                </div>

                </div>
            </nav>

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
                    <form>

                

                    <div class="row">
                        <div class="col-12 col-md-6">

                        <!-- First name -->
                        <div class="form-group">

                            <!-- Label -->
                            <label class="form-label">
                            Nombres
                            </label>

                            <!-- Input -->
                            <input type="text" class="form-control">

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
                            <input type="text" class="form-control">

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
                            <input type="email" class="form-control">

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
                            <select name="" class="form-select" id="">
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
                        Save changes
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
import Sidebar from '@/components/SideBar.vue';

export default {
  name: 'CreateColaboradorApp',
  components: {
      Sidebar
  }
}
</script>
