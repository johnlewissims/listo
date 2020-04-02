<template>
    <GridLayout rows="auto" columns="*, *, *" class="nav">
        <Button class="nav-btn" text='View' @tap="goTo('/home')" row="1"
            col="0" />
        <Button class="nav-btn" text='Map' @tap="goTo('/map')" row="1"
                col="1" />
        <Button class="nav-btn" text='Add' @tap="goTo('/add')" row="1"
            col="2" />
    </GridLayout>
</template>

<script>
    import routes from "../routes";
    export default {
        methods: {
            goTo(name) {
                this.$navigator.navigate(name);
            }
        }
    };
</script>

<style>
    * {
        font-family: 'Futura';
    }

    .nav {
        background: #F7F2F3;
    }

    .nav-btn {
        background-color: #FFC4D1;
        margin: 20;
        padding: 10;
        border-radius: 10;
        font-size: 16;
    }

    .selected {
        background-color: #D4DCCD;
        border-radius: 10;
    }

    Button {
        background: #660000;
        color: #fff;
        text-transform: uppercase;
    }
</style>
