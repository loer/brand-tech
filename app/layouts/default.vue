<template>
    <header>
        <nav-level :level="1" />
        <div class="header-title">
            <nuxt-link to="/">Brand Tech</nuxt-link>
        </div>
        <nav class="header-nav-secondary">
            <ul>
                <li><nuxt-link to="/about">About</nuxt-link></li>
            </ul>
        </nav>
    </header>
    <main>
        <slot />
    </main>
</template>

<style lang="scss">
@use "~/assets/styles/main.scss";
</style>
