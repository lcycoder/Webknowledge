<template>
    <div class="first-app">
        {{ msg }}
        <!-- <buttton></button> -->
        <confirm text="注册" @message="getMeaasge"></confirm>
        <p><router-link to="/second">第二个界面</router-link></p>
    </div>
</template>

<script>
import Confirm from '../sub/Confirm'
export default {
    name:"First",
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
 <style lang="less" scoped>
    .first-app{
        font-size:30px;
        .link{
            a{
                color:red;
            }
        }
    }
</style>