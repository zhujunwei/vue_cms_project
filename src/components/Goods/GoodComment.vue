<template>
	<div>
		<nav-bar title='商品评论' />
		<comment :cid = '$route.query.id' />
	</div>
</template>

<script>
export default {

  name: 'GoodComment',

  data() {
    return {

    };
  },
};
</script>

<style lang="css" scoped>
</style>
