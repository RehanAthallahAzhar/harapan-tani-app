import {
    TableContainer,
    Table,
    TableCaption,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Tfoot,
    Stack,
    Button

  } from '@chakra-ui/react'

  import { FiEdit2 } from "react-icons/fi";
  import { FaTrashAlt } from "react-icons/fa";

  export default function NormalTable(props){

    /*
    ============== parameters example ==============
    const value = [
      {
        header1 : 1,
        header2 : 2,
        header3 : 3,
        header4 : 4,
        header5 : 5
      },
      {
        header1 : 1,
        header2 : 2,
        header3 : 3,
        header4 : 4,
        header5 : 5
      },
      {
        header1 : 1,
        header2 : 2,
        header3 : 3,
        header4 : 4,
        header5 : 5
      },
    ]
    =====================================
    */
    const headers = Object.keys(props.data[0]);
    console.log(headers);

    const choices = [
      {label:'edit', icon: <FiEdit2/>},
      {label:'delete', icon: <FaTrashAlt/>},
  ]

    return (
      <TableContainer>
        <Table variant='simple'>
          {/* <TableCaption>data 30 hari terakhir</TableCaption> */}

          <Thead>
            <Tr>
            {headers.map((header) => {
              return (
                <Th>{header}</Th>
              )
            })}
            <Th>Opsi</Th>
            </Tr>
          </Thead>
          <Tbody>
            {props.data.map((val)=> {
              return(
                <Tr>
                    {Object.entries(val).map(([key,value]) => {
                      
                      return (
                        <Td>{value}</Td>
                      )
                    })} 
                    <Td>
                      <Stack direction='row' spacing={2}>
                        {choices.map((val)=>{
                          return (
                            <Button colorScheme='blue' variant='solid'>{val.icon}</Button>
                          )
                        })}
                      </Stack>
                    </Td>
                </Tr>
              )
            })}

          </Tbody>
          {/* <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Tfoot> */}
        </Table>
      </TableContainer>
    )

  }

