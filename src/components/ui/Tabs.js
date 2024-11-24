import {
    Tabs,
    TabList,
    Tab,
    TabIndicator,
    TabPanels,
    TabPanel,
    Flex,
    Box,
    Spacer,
    Button,
    Select
} from '@chakra-ui/react';

import { FaPlus } from "react-icons/fa";
import { SearchBar } from "./SearchBar"


export default function SimpleTabs(props) {
    return (
        <Tabs position="relative" variant="unstyled">
            <TabList>
                {props.datas.map((data) => {
                   return <Tab>{data.tab}</Tab> 
                })}
            </TabList>
            <TabIndicator
                mt="-1.5px"
                height="2px"
                bg="blue.500"
                borderRadius="1px"
            />
            <TabPanels>

                {props.datas.map((data) => {
                   return (
                        <TabPanel>
                            <Flex alignItems='baseline'>
                                <Select placeholder='Atur Kategori' w='600' borderColor='blue'>
                                    <option value='option1'>Option 1</option>
                                    <option value='option2'>Option 2</option>
                                    <option value='option3'>Option 3</option>
                                </Select>
                                <Spacer />
                                <Flex alignItems='baseline' p='4' gap='2'>
                                    <Button leftIcon={<FaPlus />} colorScheme='blue' variant='solid'>
                                        Tambah
                                    </Button>
                                    <SearchBar/>
                                </Flex>
                            </Flex>
                            {data.value}
                        </TabPanel>
                   )
                })}
                {/* <TabPanel>
                    <p>one!</p>
                </TabPanel>
                <TabPanel>
                    <p>two!</p>
                </TabPanel>
                <TabPanel>
                    <p>three!</p>
                </TabPanel> */}
            </TabPanels>
        </Tabs>
    )
}