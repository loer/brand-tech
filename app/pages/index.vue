<template>
    <div class="wrapper">
        <div class="container">
            <h1>Welcome</h1>
            <p>
                This is a small test project website based on Vue 3 serverside rendered via Nuxt. <br />
                <NuxtLink to="/about">Learn more about this site</NuxtLink>
            </p>

            <p>Navigate to the <a href="/collection">collection</a> page to see a mix of products and promotional spots, or browse the categories using the top navigation.  </p>

            <ul>
                <strong>Future improvements:</strong>
                <li>Breadcrumb navigation on all sub pages</li>
                <li>Better error handling and loading states</li>
                <li>Filters for category pages (brand/sizes etc.)</li>
                <li>Accessibility improvements</li>
                <li>Styling/UX
                    <ul>
                        <li>Make the collection grid responsive and visually appealing</li>
                        <li>Optimize styling for mobile devices (intentionally left out)</li>
                        <li>Light/Dark mode support</li>
                        <li>Sticky header for better UX navigation experience</li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
a, strong {
    font-weight: bold;
}
ul {
    list-style: square;
    padding-left: 1.5em;
    margin-top: 2em;

    ul {
        list-style: circle;
        margin-top: 0;
    }

    > strong {
        font-weight: bold;
        margin-left: -1.5em;
    }
}
</style>