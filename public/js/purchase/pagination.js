pageSize = 4;

async function dataTableGrid(records) {
  document.querySelector('form').innerHTML = '';
  for (const obj of records) {
    const categoryData = await generateDropDown(
      'productCategory',
      obj.categoryId
    );
    generateAddProductRows(
      await generateProductsDropDown(
        obj.categoryId || categoryData.data[0].opt_id,
        obj.productId
      ),
      categoryData.content,
      obj.purchaseProductId,
      { ...obj }
    );
  }
}
