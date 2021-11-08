<template>
  <div class="pagination">
    <li class="page-item previous-page">
      <a class="page-link" href="#"> Previous</a>
    </li>
    <div class="hidden lg:flex">
      <li class="page-item current-page">
        <a class="page-link" href="#">1</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#">2</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#">3</a>
      </li>
      <li class="page-item dots">
        <a class="page-link" href="#">...</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#">19</a>
      </li>
    </div>

    <li class="page-item previous-page">
      <a class="page-link" href="#">Next </a>
    </li>
  </div>
</template>

<script>
export default {
  name: 'PaginationBar',
}
</script>

<style lang="postcss" scoped>
* {
  font-family: 'IBM Mono';
}
.pagination {
  @apply pt-5 pb-12 mx-3 px-5 flex lg:mx-0 lg:pt-8 lg:pb-14 justify-center;
  text-align: center;
  user-select: none;
}

.pagination li {
  display: inline-block;
  margin: 10px;
}

.previous-page,
.next-page {
  color: #00b199;
}

.current-page {
  background-color: #00b199;
  color: #fff;
  width: 20px;
  border-radius: 17%;
}

.page-link {
  @apply mx-7 lg:mx-0;
}
</style>
