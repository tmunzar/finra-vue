<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="https://bulma.io">
            <img src="./assets/logo.svg" width="112" height="28">
            </a>

            <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
            
            </div>

            <div class="navbar-end">
                <a class="navbar-item">
                    Home
                </a>

                <a class="navbar-item">
                    About Me
                </a>

                <a class="navbar-item">
                    Work
                </a>

                <a class="navbar-item">
                    Contact
                </a>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'TopNav',
    data() {
        return {

        }
    }
}
</script>