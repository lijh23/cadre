<template>
    <div>
        {{$store.state.count}}
        <button type="button" @click="increment">增加</button>
        <button type="button" @click="decrement">减少</button>
    </div>
</template>
<script>
    import {mapActions} from 'vuex'
    export default{
        data(){},
        methods:mapActions([
            'increment',
            'decrement'
        ])
    }
</script>