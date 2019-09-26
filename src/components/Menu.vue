<template>
       <div class="app-admin-wrap" id="app">
        <div class="main-header">
            <div class="logo">
                <img src="../assets/assets/images/logo_dash.png" alt="">

            </div>

             <div class="menu-toggle">
                <div></div>
                <div></div>
                <div></div>
            </div>

            <div class="d-flex align-items-center">

              <!-- Mega menu -->
            <div class="dropdown mega-menu d-none d-md-block">
                <a href="#" class="btn text-muted dropdown-toggle mr-3" id="dropdownMegaMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Bawa Menu</a>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <div class="row m-0">
                        <div class="col-md-4 p-4 bg-img">
                            <h2 class="title">Bawa Menu</h2>
                            <p>Welcome to Bawa Connect</p>
                            <p class="mb-4">Bawa Connect is an amazing chat bot.Try Bawa Connect today and give us your feedback.</p>
                            <button class="btn btn-lg btn-rounded btn-outline-warning">Learn More</button>
                        </div>
                        <div class="col-md-4 p-4">
                            <p class="text-primary text--cap border-bottom-primary d-inline-block">Features</p>
                            <div class="menu-icon-grid w-auto p-0">
                                <a href=""><i class="i-Shop-4"></i> Dashboard</a>
                                <a href=""><i class="i-Checked-User"></i> Sessions</a>
                                <a href=""><i class="i-Ambulance"></i> Support</a>
                            </div>
                        </div>
                        <div class="col-md-4 p-4">
                            <p class="text-primary text--cap border-bottom-primary d-inline-block">Components</p>
                            <ul class="links">
                                <li><a href="">Menu1</a></li>
                                <li><a href="">Menu2</a></li>
                                <li><a href="">Menu3</a></li>
                                <li><a href="">Menu4</a></li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <!-- / Mega menu -->

                <div class="search-bar">
                    <input type="text" placeholder="Search">
                    <i class="search-icon text-muted i-Magnifi-Glass1"></i>
                </div>
            </div>

            <div style="margin: auto"></div>

            <div class="header-part-right">
                <!-- Full screen toggle -->
                <i class="i-Full-Screen header-icon d-none d-sm-inline-block" data-fullscreen></i>
                <!-- Grid menu Dropdown -->
                <div class="dropdown">
                    <i class="i-Safe-Box text-muted header-icon" role="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <div class="menu-icon-grid">
                            <a href=""><i class="i-Shop-4"></i> Dashboard</a>
                            <a href=""><i class="i-Speach-Bubble"></i> Chat</a>
                            <a href=""><i class="i-Checked-User"></i> Sessions</a>
                            <a href=""><i class="i-Ambulance"></i> Support</a>
                        </div>
                    </div>
                </div>
                <!-- Notificaiton -->



                <!-- User avatar dropdown -->
                <div class="dropdown">
                    <div class="user col align-self-end">
                        <img src="../assets/assets/images/bawa_white.png" id="userDropdown" alt="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                            <div class="dropdown-header">
                                <i class="i-Lock-User mr-1"></i> First User
                            </div>
                            <a class="dropdown-item">Account settings</a>
                            <a class="dropdown-item">Billing history</a>
                            <a class="dropdown-item" href="#">Sign out</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
   </div>
</template>

<script>
export default {
  

}
</script>

<style scoped>

</style>
