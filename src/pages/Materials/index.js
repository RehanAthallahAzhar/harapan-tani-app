import {
    Text,
    Box,
    Button,
    Flex
  } from '@chakra-ui/react'


import NormalTable from "../../components/ui/NormalTable"
import CardInfo from '../../components/ui/CardInfo'
import SimpleTabs from "../../components/ui/Tabs"

//const
import { FINISHEDSTATS } from '../../data/constant'


const Materials = () => {

    const value = [
        {
          "Tgl. Pemesanan": "01/01/2001",
          "Tgl. Sampai": "21/05/2011",
          "Nama Supplier": "supplier 1",
          "Jumlah": 4,
          "Harga": 50000,
          "Status": FINISHEDSTATS,
        },
        {
          "Tgl. Pemesanan": "01/01/2001",
          "Tgl. Sampai": "21/05/2011",
          "Nama Supplier": "supplier 1",
          "Jumlah": 4,
          "Harga": 50000,
          "Status": FINISHEDSTATS,
        },
        {
          "Tgl. Pemesanan": "01/01/2001",
          "Tgl. Sampai": "21/05/2011",
          "Nama Supplier": "supplier 1",
          "Jumlah": 4,
          "Harga": 50000,
          "Status": FINISHEDSTATS,
        },
      ]

      const value2 = [
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

      const value3 = [
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

    const tabsData = [
        {tab: "Daftar Produk", value: <NormalTable data={value} />},
        {tab: "Daftar Penyesuaian Stok", value: <NormalTable data={value2} />},
        {tab: "Membutuhkan Persetujuan", value: <NormalTable data={value3} />},
      ]


    const summaries = {
        "Pembelian Belum Dibayar": [
          { value: '20000'},
        ],
        "Pembelian Jatuh Tempo": [
          { value: '30000'},
        ],
        "Penulasan Terbayar": [
          { value: '30000'},
          ],
        // "Gudang": [
        //   { label: 'Gudang1', value: '41', valuetype: 'unit' },
        //   { label: 'Gudang2', value: '53', valuetype: 'unit' },
        //   { label: 'Gudang3', value: '47', valuetype: 'unit' }
        // ],
      };
    return (
        <>
          <Flex alignItems='baseline'>
            <Text  fontSize='4xl' fontWeight='bold' color='#1A365D' me='6px'>Pengeluaran</Text>
            <Text  fontSize='xl' fontWeight='bold' color='#2C5282'>(Pembelian Barang)</Text>
          </Flex>
          <Box
            my={6}
          >
            <CardInfo datas={summaries} />
          </Box>
    
          {/* <Flex justify='flex-end'>
            <Button leftIcon={<FaPlus />} colorScheme='blue' variant='solid' me={4}>
              Add
            </Button>
            <SearchBar/>
          </Flex> */}
    
          <Box
            my={12}
          >
            <SimpleTabs datas={tabsData}/>
          </Box>
    
    
    
        </>
      )
}

export default Materials