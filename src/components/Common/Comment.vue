<template>
    <div class="tmpl">
        <div class="photo-bottom">
            <ul>
                <li class="photo-comment">
                    <div>
                        <span>提交评论</span>
                        <!-- <span><a >返回</a></span> -->
                    </div>
                </li>
                <li class="txt-comment">
                    <textarea 
                        v-model="commentBody"
                        cols="50" rows="10"></textarea>
                </li>
                <li>
                    <button class="btn" @click="this.createComment">发表评论按钮</button>
                </li>
                <li class="photo-comment">
                    <div>
                        <span>评论列表</span>
                        <!-- <span>44条评论</span> -->
                    </div>
                </li>
            </ul>
            <ul class="comment-list">
                <li v-for= "(item, index) in commentList" :key="index">
                    <span class="name">{{item.user_name}}：</span>
                    <span class="content">{{item.content}}</span>
                    <span class="time">{{item.add_time | formatDateYMD}}</span>
                </li>
                
            </ul>
            <button
                v-if="showMoreBtn" 
                class="btn top20" @click="this.loadmore">加载更多按钮</button>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Comment',
        props: ['cid'],
        data(){
            return {
                commentList: [],
                commentBody: "",
                pageIndex: 1,
                showMoreBtn:true
            }
        },
        methods:{
            //获取评论列表
            getCommentList(){
                this.$axios.get(`/getcomments/${this.cid}?pageindex=${this.pageIndex}`)
                    .then(res => {
                        if(!res.data.message.length){
                            this.showMoreBtn = false;
                            return;
                        }
                        this.commentList = this.commentList.concat(res.data.message);
                        this.pageIndex ++;
                    })
            },
            loadmore(){
                this.getCommentList();
            },
            createComment(){
                if(!this.commentBody) return;
                this.$axios.post(`/postcomment/${this.cid}`, `content=${this.commentBody}`, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }).then(res => {
                    this.commentBody = "";
                    this.pageIndex = 1;
                    this.commentList = [];
                    this.getCommentList();
                    
                })
            }
        },
        created(){
            this.getCommentList();
        }

    }
</script>
<style scoped>
.tmpl{
    padding-bottom: 100px;
}
.photo-comment > div span:nth-child(1) {
    float: left;
    font-weight: bold;
    margin-left: 5px;
}

.photo-comment > div span:nth-child(2) {
    float: right;
}

.photo-comment {
    height: 30px;
    line-height: 30px;
    margin-bottom: 5px;
    margin-top: 20px;
}

.txt-comment {
    resize: none;
}

.txt-comment textarea {
    padding: 10px;
    margin-bottom: 5px;
    resize: none;
    border-radius: 4px;
}
.txt-comment textarea:focus ,
.txt-comment textarea:active {
    outline:none;
    border-color: #26a2ff;
}

.comment-list li {
    display: block;
    display: flex;
    align-items: flex-start;
    margin-bottom: 10px;
}
.comment-list li .name{
    width: 75px;
    font-size: 14px;
    flex-shrink: 0;
    color: #666;
}
.comment-list li .content{
    flex: 1;
    font-size: 14px;
    color: #333;
    padding: 0 10px;
    word-break: break-all;
}
.comment-list li .time{
    width: 80px;
    font-size: 14px;
    color: #666;
    flex-shrink: 0;
}

li {
    list-style: none;
}

ul {
    margin: 0;
    padding: 0;
}
textarea{
    width: 100%;
}

.btn{
    position: relative;
    width: 100%;
    height: 30px;
    line-height: 30px;
    background-color: #26a2ff;
    text-align: center;
    color: #fff;
    font-size: 14px;
    outline: none;
    border: none;
    border-radius: 4px;

}
</style>
