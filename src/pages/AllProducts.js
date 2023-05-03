import React from 'react';
import CommonLayout from '../layouts/common/CommonLayout';
import SearchBar from '../components/all seller/SellerSearch';

export default function AllProducts() {
  return (
    <div>
      <CommonLayout>
        <div style={{ paddingTop: 10 }}>
          <SearchBar />
        </div>
      </CommonLayout>
    </div>
  );
}
