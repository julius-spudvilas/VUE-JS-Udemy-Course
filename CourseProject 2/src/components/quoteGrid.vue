<template>
    <div class="row">
        <app-quote v-for="(quote, index) in quotes" @click.native="deleteQuote(index)">{{ quote }}</app-quote>
    </div>
</template>
<script>
    import Quote from './quote.vue'
    export default {
        components: {
          appQuote: Quote
        },
        props: ['quotes'],
        methods: {
            deleteQuote(index) {
                this.$emit('quoteDeleted', this.index);
            }
        }
    }
</script>
<style></style>