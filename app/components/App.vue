<template>
    <GridLayout class="App" rows="*, auto">
        <ContentView row="0">
            <Navigator defaultRoute="/home" />
        </ContentView>
        <nav row="1" />
    </GridLayout>
</template>

<script>
    import nav from "./Nav";
    const appSettings = require("tns-core-modules/application-settings"); 

    export default {
        components: {
            nav
        },
        data() {
            return {};
        },
        mounted() {
            console.log(this.$store.state.count);
            const username = appSettings.getString("username");
            console.log(username);
        }
    };
</script>

<style scoped>
    .home-panel {
        vertical-align: center;
        font-size: 20;
        margin: 15;
    }

    .description-label {
        margin-bottom: 15;
    }
</style>