<!--elconfig用于国际化-->
<template>
    <div>
        <Head/>

        <div style="display: flex">
            <Aside />
            <router-view style="flex:1"/>
        </div>
    </div>
</template>

<style>
    
</style>

<script>

import Head from "@/components/Head";
import Aside from "@/components/Aside";

export default{
    name:"App",
    components:{
        Head,
        Aside,
    },
}
</script>