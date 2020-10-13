<template>
    <div class="first-app">
        {{ msg }}
        <!-- <buttton></button> -->
        <confirm text="gg" @message="getMeaasge"></confirm>
    </div>
</template>

<script>
import Confirm from '../sub/Confirm'
export default {
    name:"second",
    components:{
        Confirm
    },
    data(){
        return {
            msg:"Welcome to FirstAppaaaa"
        };
    },
    methods:{
        getMeaasge(val){
            alert(val);
        }
    }
};
</script>
<style >

</style>