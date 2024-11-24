import NormalTable from "../../components/ui/NormalTable";
import CardInfo from "../../components/ui/CardInfo";
import SimpleTabs from "../../components/ui/Tabs";
import { SearchBar } from "../../components/ui/SearchBar";

import {
  Text,
  Box,
  Button,
  Flex
} from '@chakra-ui/react'

import { FaPlus } from "react-icons/fa";

const Product = () => {

  const value = [
    {
      header1: 1,
      header2: 2,
      header3: 3,
      header4: 4,
      header5: 5
    },
    {
      header1: 1,
      header2: 2,
      header3: 3,
      header4: 4,
      header5: 5
    },
    {
      header1: 1,
      header2: 2,
      header3: 3,
      header4: 4,
      header5: 5
    },
  ]

  const value2 = [
    {
      header1: 31,
      header2: 13,
      header3: 32,
      header4: 13,
      header5: 13
    },
    {
      header1: 14,
      header2: 16,
      header3: 23,
      header4: 25,
      header5: 64
    },
    {
      header1: 53,
      header2: 24,
      header3: 25,
      header4: 27,
      header5: 28
    },
  ]

  const value3 = [
    {
      header1: 123,
      header2: 421,
      header3: 531,
      header4: 364,
      header5: 546
    },
    {
      header1: 234,
      header2: 536,
      header3: 234,
      header4: 342,
      header5: 234
    },
    {
      header1: 345,
      header2: 234,
      header3: 346,
      header4: 234,
      header5: 324
    },
  ]

  const summaries = {
    "Stok Tersedia": [
      { label: '5', labeltype: 'Kg', value: '200', valuetype: 'unit' },
      { label: '10', labeltype: 'Kg', value: '150', valuetype: 'unit' },
      { label: '20', labeltype: 'Kg', value: '50', valuetype: 'unit' }
    ],
    "Stok Terjual": [
      { label: '5', labeltype: 'Kg', value: '41', valuetype: 'unit' },
      { label: '10', labeltype: 'Kg', value: '53', valuetype: 'unit' },
      { label: '20', labeltype: 'Kg', value: '47', valuetype: 'unit' }
    ],
    // "Gudang": [
    //   { label: 'Gudang1', value: '41', valuetype: 'unit' },
    //   { label: 'Gudang2', value: '53', valuetype: 'unit' },
    //   { label: 'Gudang3', value: '47', valuetype: 'unit' }
    // ],
  };

  const tabsData = [
    {tab: "Daftar Produk", value: <NormalTable data={value} />},
    {tab: "Daftar Penyesuaian Stok", value: <NormalTable data={value2} />},
    {tab: "Membutuhkan Persetujuan", value: <NormalTable data={value3} />},
  ]
  return (
    <>
      <Text fontSize='4xl' fontWeight='bold'>Stok Produk</Text>
      <Box
        my={6}
      >
        <CardInfo datas={summaries} />
      </Box>

      <Flex justify='flex-end'>
        <Button leftIcon={<FaPlus />} colorScheme='blue' variant='solid' me={4}>
          Add
        </Button>
        <SearchBar/>
      </Flex>

      <Box
        my={12}
      >
        <SimpleTabs datas={tabsData}/>
      </Box>



    </>
  )
}

export default Product


