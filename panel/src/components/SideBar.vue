<template>
    <nav class="navbar navbar-vertical fixed-start navbar-expand-md navbar-light" id="sidebar">
      <div class="container-fluid">
    
        <!-- Toggler -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarCollapse" aria-controls="sidebarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
    
        <!-- Brand -->
        <RouterLink class="navbar-brand" to="/">
          <img src="/assets/img/logo.svg"
           class="navbar-brand-img mx-auto" alt="...">
        </RouterLink>
    
        <!-- User (xs) -->
        <div class="navbar-user d-md-none">
    
          <!-- Dropdown -->
          <div class="dropdown">
    
            <!-- Toggle -->
            <RouterLink  to="/" class="dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <div class="avatar avatar-sm avatar-online">
                <img src="/assets/img/avatar-1.jpg"
                 class="avatar-img rounded-circle" alt="...">
              </div>
            </RouterLink>
    
            <!-- Menu -->
            <div class="dropdown-menu dropdown-menu-end" aria-labelledby="sidebarIcon">
              <RouterLink  to="/"
               class="dropdown-item">Profile</RouterLink>
              <RouterLink  to="/"
               class="dropdown-item">Settings</RouterLink>
              <hr class="dropdown-divider">
              <RouterLink  to="/"
               class="dropdown-item">Logout</RouterLink>
            </div>
    
          </div>
    
        </div>
    
        <!-- Collapse -->
        <div class="collapse navbar-collapse" id="sidebarCollapse">
    
          <!-- Form -->
          <form class="mt-4 mb-3 d-md-none">
            <div class="input-group input-group-rounded input-group-merge input-group-reverse">
              <input class="form-control" type="search" placeholder="Search" aria-label="Search">
              <div class="input-group-text">
                <span class="fe fe-search"></span>
              </div>
            </div>
          </form>
    
          <!-- Navigation -->
          <ul class="navbar-nav">
            <li class="nav-item">
              <RouterLink class="nav-link" to="#sidebarDashboards" data-bs-toggle="collapse" role="button" aria-expanded="true" aria-controls="sidebarDashboards">
                <i class="fe fe-home"></i> Dashboards
              </RouterLink>
              <div class="collapse show" id="sidebarDashboards">
                <ul class="nav nav-sm flex-column">
                  <li class="nav-item">
                    <RouterLink  to="/"
                     class="nav-link active">
                      Default
                    </RouterLink>
                  </li>
                  <li class="nav-item">
                    <RouterLink  to="/"
                     class="nav-link ">
                      Project Management
                    </RouterLink>
                  </li>
                  <li class="nav-item">
                    <RouterLink  to="/"
                     class="nav-link ">
                      E-Commerce
                    </RouterLink>
                  </li>
                </ul>
              </div>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link " to="./widgets.html">
                <i class="fe fe-grid"></i> Widgets
              </RouterLink>
            </li>
          </ul>
    
          <!-- Push content down -->
          <div class="mt-auto"></div>
    
            <!-- User (md) -->
            <div class="navbar-user d-none d-md-flex" id="sidebarUser">
    
              <!-- Icon -->
              <RouterLink class="navbar-user-link" data-bs-toggle="offcanvas" to="/" aria-controls="sidebarOffcanvasActivity">
                <span class="icon">
                  <i class="fe fe-bell"></i>
                </span>
              </RouterLink>
    
              <!-- Dropup -->
              <div class="dropup">
    
                <!-- Toggle -->
                <RouterLink  to="/"
                 class="dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <div class="avatar avatar-sm avatar-online">
                    <img src="/assets/img/avatar-1.jpg"
                     class="avatar-img rounded-circle" alt="...">
                  </div>
                </RouterLink>
    
                <!-- Menu -->
                <div class="dropdown-menu" aria-labelledby="sidebarIconCopy">
                  <RouterLink  to="/"
                   class="dropdown-item">Profile</RouterLink>
                  <RouterLink  to="/"
                   class="dropdown-item">Settings</RouterLink>
                  <hr class="dropdown-divider">
                  <RouterLink  to="/"
                   class="dropdown-item">Logout</RouterLink>
                </div>
    
              </div>
    
              <!-- Icon -->
              <RouterLink class="navbar-user-link" data-bs-toggle="offcanvas" to="/" aria-controls="sidebarOffcanvasSearch">
                <span class="icon">
                  <i class="fe fe-search"></i>
                </span>
              </RouterLink>
    
            </div>
    
        </div> <!-- / .navbar-collapse -->
    
      </div>
    </nav>
</template>

<script>
export default {
  name: 'SideBar',
  props: {}
}
</script>


<style scoped>
a {
  color: #6e84a3!important;
}
</style>