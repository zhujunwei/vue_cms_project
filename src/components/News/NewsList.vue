<template>
	<div class="news page">
		<div class="newList">
			<ul>
			    <li v-for="item in newLists" :key="item.id">
			    	<router-link :to="{path: `/newsdetail/${item.id}`}">
			    		<div class="new_img">
			    			<img :src="item.img_url" alt="">
			    		</div>
			    		<div class="content">
			    			<p class="title">{{item.title}}</p>
			    			<div class="news-desc">
			    				<p class="summary">{{item.zhaiyao}}</p>
			    				<p>
			    					<span class="praise">点赞数:{{item.click}}</span>
			    					<span class="time">发表时间: {{item.add_time | formatDateYMD}}</span>
			    				</p>
			    			
			    			</div>
			    		</div>
			    	</router-link>
			    </li>	    
			</ul>
		</div>
	</div>
</template>

<script>


export default {
  name: 'NewList',
  data() {
    return {
    	newLists: []
    };
	},
	created(){
		this.$axios.get('getnewslist')
		.then(res => {
			console.log(res.data);
			this.newLists = res.data.message;
		})
		.catch(err => {
			console.log(err);
		})
	}
};
</script>

<style lang="css" scoped>

	.newList {
		width: 100%;
		border-bottom: 1px solid #CCCCCC;
		font-size: 12px;

	}
	.newList ul li {
		width: 100%;
		background-color: #fff;
		position: relative;
		padding: 0 15px;
		margin-bottom: 15px;
	}
	.newList ul li  a{
		display: flex;
		width: 100%;
		height: 120px;
		color: #808080;
		display: flex;
		text-decoration: none;
	}
	.new_img{
		width: 100px;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;

	}
	.newList ul li  a img{
		width: 100px;
		height: 80px;
		background-color: red;
		border-radius: 3px;
	
	}

	.newList ul li  a .content{
		flex: 1;
		margin-left: 30px;
		padding: 10px 0;
		overflow: hidden;
	}
	.content .title{
		width: 100%;
		font-size: 15px;
		display: inline-block;
		color: #333;
		letter-spacing: 0;
		padding-bottom: 7px;
		font-family: PingFangSC-Regular;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}
	.content .news-desc{
		/*margin-top: 20px;*/
	}
	.news-desc span{
		color: #ff6700;
	}
	.summary{
		padding: 5px 0;
	}
	.time{
		margin-left: 20px;
	}
</style>
