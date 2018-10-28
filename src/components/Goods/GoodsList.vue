<template>
  <div>
  <div class="page-loadmore">
    <div class="page-loadmore-wrapper" >
        <ul class="page-loadmore-list">
             <li>
                <a href=''>
                    <img src="http://vue.studyit.io/upload/201504/20/thumb_201504200239192345.jpg">
                    <div class="title">好东西</div>
                    <div class="desc">
                        <div class="sell">
                            <span>￥80</span>
                            <s>￥9000</s>
                        </div>
                        <div class="detail">
                            <div class="hot">
                                热卖中
                            </div>
                            <div class="count">
                                剩99件
                            </div>
                        </div>
                    </div>
                </a>
            </li>
             <li>
                <a href=''>
                    <img src="http://vue.studyit.io/upload/201504/20/thumb_201504200239192345.jpg">
                    <div class="title">好东西</div>
                    <div class="desc">
                        <div class="sell">
                            <span>￥80</span>
                            <s>￥9000</s>
                        </div>
                        <div class="detail">
                            <div class="hot">
                                热卖中
                            </div>
                            <div class="count">
                                剩99件
                            </div>
                        </div>
                    </div>
                </a>
            </li>
             <li>
                <a href=''>
                    <img src="http://vue.studyit.io/upload/201504/20/thumb_201504200239192345.jpg">
                    <div class="title">好东西</div>
                    <div class="desc">
                        <div class="sell">
                            <span>￥80</span>
                            <s>￥9000</s>
                        </div>
                        <div class="detail">
                            <div class="hot">
                                热卖中
                            </div>
                            <div class="count">
                                剩99件
                            </div>
                        </div>
                    </div>
                </a>
            </li>
        </ul>
    </div>
  </div>
  </div>
</template>



<script>

</script>

<style scoped>
.mint-loadmore{
  /*margin-top: 80px;*/
}
 .page-loadmore-list{
  overflow: hidden;
  height: 100%;
 }
.page-loadmore-list li {

    width: 50%;
    float: left;
    /*padding: 6px;*/
    /*box-sizing: border-box;*/


}
li > a:not(.mui-btn) {
    margin: 0px;
    padding: 0px;
    border: 1px solid #5c5c5c;
    box-shadow: 0 0 4px #666;
    width: 100%;
    display: block;


}

li > a:not(.mui-btn) img {
     width: 100%;
}

.sell > span {
    float: left;
    color: red;
    text-align: left;
}

.detail >.hot {
    float: left;
    text-align: left;
    font-size: 15px;
}

.detail >.count {
    float: right;
    text-align: right;
    font-size: 15px;
}


/*撑开，去除浮动没有的高度*/

.detail {
    overflow: hidden;
}

.desc {
    color: rgba(92, 92, 92, 0.8);
    background-color: rgba(0, 0, 0, 0.2);
}

img {
    height: 200px;
}

.page-loadmore-listitem {
    border-bottom: 1px solid #eee
}

.page-loadmore-listitem {
    height: 50px;
    line-height: 50px;
    text-align: center
}

.page-loadmore-listitem:first-child {
    border-top: 1px solid #eee
}

.page-loadmore-wrapper {
    overflow: scroll
}

.mint-loadmore-bottom span {
    display: inline-block;
    -webkit-transition: .2s linear;
    transition: .2s linear;
    vertical-align: middle
}

.mint-loadmore-bottom span.is-rotate {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg)
}

</style>