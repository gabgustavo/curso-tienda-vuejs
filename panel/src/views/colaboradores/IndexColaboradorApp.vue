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
                                        <a class="nav-link active">
                                        Todos los colaboradores
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <router-link :to="{name:'user-create'}" class="nav-link">Nuevo colaborador</router-link>
                         
                                        
                                    </li>
                                    
                                    </ul>

                                </div>
                                </div>
                            </div>
                        </div>

                        <div class="tab-content">
              <div class="tab-pane fade show active" id="contactsListPane" role="tabpanel" aria-labelledby="contactsListTab">

                <!-- Card -->
                <div class="card" data-list='{"valueNames": ["item-name", "item-title", "item-email", "item-phone", "item-score", "item-company"], "page": 10, "pagination": {"paginationClass": "list-pagination"}}' id="contactsList">
                  <div class="card-header">
                    <div class="row align-items-center">
                      <div class="col">

                        <!-- Form -->
                        <form>
                          <div class="input-group input-group-flush input-group-merge input-group-reverse">
                            <input class="form-control list-search" type="search" placeholder="Search">
                            <span class="input-group-text">
                              <i class="fe fe-search"></i>
                            </span>
                          </div>
                        </form>

                      </div>
                      
                      <div class="col-auto">

                        <!-- Dropdown -->
                        <button class="btn btn-sm btn-white" type="button">
                          <i class="fe fe-sliders me-1"></i> Filter <span class="badge bg-primary ms-1 d-none">0</span>
                        </button>

                      </div>
                    </div> <!-- / .row -->
                  </div>
                  <div class="table-responsive">
                    <table class="table table-sm table-hover table-nowrap card-table">
                      <thead>
                        <tr>
                          <th>
                            <a class="list-sort text-muted">Nombres</a>
                          </th>
                          <th>
                            <a class="list-sort text-muted">Cargo</a>
                          </th>
                          <th>
                            <a class="list-sort text-muted">Email</a>
                          </th>
                          <th>
                            <a class="list-sort text-muted">Estado</a>
                          </th>
                           <th>
                            Acciones
                          </th>
                        </tr>
                      </thead>
                      <tbody class="list fs-base">
                        <tr v-for="colaborador in colaboradores" :key="colaborador._id">
                         
                          <td>

                            <!-- Avatar -->
                            <div class="avatar avatar-xs align-middle me-2">
                              <img class="avatar-img rounded-circle" src="/assets/img/avatar-1.jpg" alt="...">
                            </div> 
                            <a class="item-name text-reset">{{ colaborador.nombres }} {{ colaborador.apellidos }}</a>

                          </td>
                          <td>

                            <!-- Text -->
                            <span class="item-title">{{ colaborador.rol }}</span>

                          </td>
                          <td>

                            <!-- Email -->
                            <a class="item-email text-reset">{{ colaborador.email }}</a>

                          </td>
                          <td>

                            <!-- Badge -->
                            <span v-if="!colaborador.estado" class="item-score badge bg-danger-soft">Inactivo</span>
                            <span v-else class="item-score badge bg-success-soft">Activo</span>

                          </td>
                          <td class="text-end">

                            <!-- Dropdown -->
                            <div class="dropdown">
                              <a class="dropdown-ellipses dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fe fe-more-vertical"></i>
                              </a>
                              <div class="dropdown-menu dropdown-menu-end">
                                <a href="#!" class="dropdown-item">
                                  Acciones
                                </a>
                                <a href="#!" class="dropdown-item">
                                  Editar
                                </a>
                                <a href="#!" class="dropdown-item">
                                  Eliminar
                                </a>
                              </div>
                            </div>

                          </td>
                        </tr>
                        
                        
                      </tbody>
                    </table>
                  </div>
                  <div class="card-footer d-flex justify-content-between">

                    <!-- Pagination (prev) -->
                    <ul class="list-pagination-prev pagination pagination-tabs card-pagination">
                      <li class="page-item">
                        <a class="page-link ps-0 pe-4 border-end" href="#">
                          <i class="fe fe-arrow-left me-1"></i> Prev
                        </a>
                      </li>
                    </ul>

                    <!-- Pagination -->
                    <ul class="list-pagination pagination pagination-tabs card-pagination"></ul>

                    <!-- Pagination (next) -->
                    <ul class="list-pagination-next pagination pagination-tabs card-pagination">
                      <li class="page-item">
                        <a class="page-link ps-4 pe-0 border-start" href="#">
                          Next <i class="fe fe-arrow-right ms-1"></i>
                        </a>
                      </li>
                    </ul>

                    <!-- Alert -->
                    <div class="list-alert alert alert-dark alert-dismissible border fade" role="alert">

                      <!-- Content -->
                      <div class="row align-items-center">
                        <div class="col">

                          <!-- Checkbox -->
                          <div class="form-check">
                            <input class="form-check-input" id="listAlertCheckbox" type="checkbox" checked disabled>
                            <label class="form-check-label text-white" for="listAlertCheckbox">
                              <span class="list-alert-count">0</span> deal(s)
                            </label>
                          </div>

                        </div>
                        <div class="col-auto me-n3">

                          <!-- Button -->
                          <button class="btn btn-sm btn-white-20">
                            Edit
                          </button>

                          <!-- Button -->
                          <button class="btn btn-sm btn-white-20">
                            Delete
                          </button>

                        </div>
                      </div> <!-- / .row -->

                      <!-- Close -->
                      <button type="button" class="list-alert-close btn-close" aria-label="Close"></button>

                    </div>

                  </div>
                </div>

              </div>
              
            </div>

                    </div>
                </div> <!-- / .row -->
            </div>

        </div>
    </div>
</template>

<script>
import Sidebar from '@/components/SideBar.vue';
import TopNav from '@/components/TopNav.vue';
import { backendApi } from '@/api/backendApi';


export default {
  name: 'IndexColaboradorApp',
  components: {
    Sidebar,
    TopNav
  },
  data() {
    return {
        colaboradores: [],
        loading: false,
    }
  },
  async beforeMount() {
    try {
        const {data} = await backendApi.get('/user-list');
        this.colaboradores = data.usuarios;
        console.log('____');
        console.log(data);
    } catch (error) {
        console.log(error);
        
    }
    
      
  },
}
</script>
