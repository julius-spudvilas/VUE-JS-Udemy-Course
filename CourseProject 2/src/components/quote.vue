<template>
    <div class="col-sm-6 col-md-6 col-lg-3">
        <div class="panel panel-default">
            <div class="panel-body quote">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['quotes']
    }
</script>
<style>
    .panel-body {
        font-family: 'Arizonia', cursive;
        font-size: 24px;
        color: aqua;
    }
    .quote {
        cursor: pointer;
    }
    .quote:hover {
        background-color: pink;
    }
</style>