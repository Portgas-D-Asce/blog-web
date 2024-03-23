<template>
    <el-row class="blog-abstracts">
        <el-col :xs="1" :sm="1" :md="2" :lg="3" :xl="3"></el-col>
        <el-col :xs="22" :sm="22" :md="20" :lg="18" :xl="18">
            <el-row v-for="article in articles" class="abstract">
                <el-col :span="10">
                    <img :src="`https://123.56.244.110:8080/blog/api/v1/images?name=${article.id}-0.jpg&ratio=2`"/>
                    <!--  
                    <img :src="`https://localhost:8080/blog/api/v1/images?name=${article.id}-0.jpg&ratio=2`"/>
                    -->
                </el-col>
                
                <el-col :span="14" class="right">
                    <el-row class="title fontsz28">
                        <el-col :span="24">
                            <router-link :to="{ path: '/articles/' + article.name}">
                                {{ article.name }}
                            </router-link>
                        </el-col>
                    </el-row>

                    <el-row class="tags">
                        <el-col :span="24"> 
                            <router-link v-for="tag in article.tags" 
                                    :to="{ path: '/articles', query: {'tag': tag.name}}" class="tag">
                                <el-tag class="ml-2" :type="get_random_tag_type()"> {{ tag.name }} </el-tag>
                            </router-link>
                        </el-col>
                    </el-row>
        
                    <el-row>
                        <el-col :span="24"> {{ article.description }} </el-col>
                    </el-row>

                    <el-row class="statistic">
                        <el-col :span="12"> {{ article.date.substring(0, 19).replace('T', '\t') }} </el-col>
                        <el-col :span="12" style="text-align: right;">
                            阅读 ({{ article.read }}) | 
                            拉胯 ({{ article.downvoted }}) | 
                            点赞 ({{ article.upvoted }})
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </el-col>
    </el-row>
</template>


<script setup lang="ts">
import { Abstract } from '../entity/Article';

type Props = {
    articles: Array<Abstract>
}

defineProps<Props>();

const get_random_tag_type = () => {
    const tag_type_list:Array<String> = ["primary", "success", "warning", "danger"];
    const idx = Math.floor(Math.random() * 1000) % tag_type_list.length;
    return tag_type_list[idx];
};
</script>


<style scoped>
.blog-abstracts {
    min-height: 80vmin;
    margin-top: 25px;
}

.abstract {
    box-shadow: 1px 1px 10px rgba(0,0,0,.2);
    border-bottom: 1px solid #eee;
    border-radius: 5px;
    margin-bottom: 30px;
    opacity:0.9;
    background-size: 50%;
}

.right {
    padding: 8px 15px !important;
    display: flex;
    flex-direction: column;
}

.tags {
    padding: 15px 0;
}
.tag {
    margin-right: 9px;
}

.statistic {
    padding: 10px 0px;
    margin-top: auto;
}
</style>
