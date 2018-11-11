<template>
	<div class="photoList page">
		<div class='category-list'>
			<ul>
				<li v-for = '(item) in categaryList' :key="item.id">
					<router-link 
						:to='{path: `/photos/list/${item.id}`}'
						:class="[item.id === itemActiveId ? 'active' : '']">
						{{item.title}}
					</router-link>
				</li>
			</ul>
		</div>

		<!-- 图片展示区域 -->
		<div class = 'photo-list' v-if="!!imgList.length">
			<ul>
				<li v-for = '(item) in imgList' :key = 'item.id'>
					
					<router-link
						:to="{ path: `/photos/detail/${item.id}`}"
					>
						<img v-lazy="item.img_url" alt="">
					</router-link>
					<p>
						<span>{{item.title}}</span>
						<br>
						<span>{{item.seo_description}}</span>
					</p>
				</li>
			</ul>
		</div>
		<div class="no-data" v-if="!imgList.length">
			暂无数据
		</div>
	</div>
</template>

<script>
export default {

  name: 'PhotoList',

  data() {
    return {
			itemActiveId: 0,
			categaryList: [],
			imgList:[]
    }
	},
	methods: {
		getListByCage(id){
			this.$axios.get(`/getimages/${id}`)
				.then(res => {
					console.log(res)
					this.imgList = res.data.message;
				})
		}
	},
	created(){
		console.log(this.$route.params)
		this.itemActiveId = +this.$route.params.id;
		this.$axios.get("/getimgcategory")
			.then(res => {
				console.log(res);
				this.categaryList = res.data.message;
				this.categaryList.unshift({
					id: 0,
					title: "全部"
				})
			})
		this.getListByCage(this.itemActiveId);
	},
	beforeRouteUpdate (to, from, next) {
		let fromId = +from.params.id;
		let toId = +to.params.id;
		this.itemActiveId = +to.params.id
		this.getListByCage(toId);
		next();
	},
	watch: {
	}
};
</script>

<style lang="css" scoped>
.category-list{
	width: 100%;
	height: 40px;
	overflow:hidden;

}
.category-list ul {
	position: fixed;
	width: 100%;
	height: 40px;
	overflow-y:hidden;
	overflow-x: scroll;
	white-space: nowrap;
	background-color: #fff;
	z-index: 999;

}
.category-list ul  li{
	display: inline-block;
	width: auto;
	padding: 0 15px;
	height: 100%;
	font-size: 18px;
	line-height:  40px;
	text-align: center;

}
.category-list ul  li a{
	text-decoration: none;
	font-size: 16px;
	color: #333;
}


.category-list ul  li a.active{
	color: #26a2ff;
}
.photo-list ul li{
	width: 100%;
	position: relative;

}
.photo-list ul li a {
	display: block;
	width: 100%;
}
.photo-list ul li a  img{
	width: 100%;
	min-height: 300px;
}
.photo-list ul li p{
	position: absolute;
	bottom: 0;
	width: 100%;
	/*height: 100px;*/
	background-color: rgba(0,0,0,.8);
	padding: 10px;
	box-sizing: border-box;
}
.photo-list ul li p span{
	color: #E6E6E6;
	font-size: 14px;
}
.photoList{
	padding-bottom: 100px;
}
image[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
.icon-meiyoutupian{
	width: 50px;
	height: 50px;
}
.no-data{
	position: relative;
	width: 100%;
	height: 300px;
	line-height: 300px;
	color: #bbb;
	font-size: 20px;
	text-align: center;
}


</style>
