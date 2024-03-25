<!-- Часть 2. Задание Vue
Вы разрабатываете приложение для интернет-магазина и у вас есть компонент Vue под названием "ProductDetails". Компонент отображает детали о конкретном продукте, включая его название, цену и статус доступности.

Внутри компонента "ProductDetails" создайте свойство "product" с объектом, представляющим информацию о продукте. Объект должен иметь свойства "name" (название продукта), "price" (цена продукта) и "available" (флаг, указывающий на доступность продукта).

Используя вычисляемое свойство, назовите его "formattedPrice", которое будет возвращать форматированную цену продукта со знаком валюты. Например, если цена равна 99.99, вычисляемое свойство должно вернуть строку "$99.99".

В компоненте "ProductDetails" отобразите название продукта, его форматированную цену и статус доступности.

Если продукт доступен, отобразите текст "Available", в противном случае - "Out of stock". -->

<template>
  <div>
    <p> {{ product.name }}</p>
    <p> {{ formattedPrice }}</p>
    <p> {{ available }}</p>
  </div>
</template>

<script>
export default {
  name: "ProductDetails",
  props: {},
  data() {
    const product = {
      name: "nameProduct",
      price: "99.99",
      available: false,
    };
    return {
      product,
    };
  },
  computed: {
    formattedPrice: function () {
      return "$" + this.product.price;
    },
    available: function () {
      return this.product.available ? "Available" : "Out of stock";
    },
  },
};
</script>

<style scoped></style>
