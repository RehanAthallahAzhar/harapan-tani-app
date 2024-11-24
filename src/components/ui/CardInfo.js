import {
    Card,
    SimpleGrid,
    CardHeader,
    CardBody,
    CardFooter,
    Heading,
    Text,
    Button,
    Flex,
    Square,
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    Spacer,
    Box

} from '@chakra-ui/react'
import { formatRupiah } from '../../utils/formatRupiah'

export default function CardInfo(props) {

    return (
        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(300px, 1fr))'>
            {Object.keys(props.datas).map((key) => {
                return (
                    <Card data-type='Card'
                        overflow='hidden'
                        variant='outline'
                        mx='12px'
                        bgGradient='linear(to-l, #96EFFF, #5FBDFF)'
                    >
                        <CardBody data-type='CardBody'>
                            <Stat data-type='Stat'>
                                <StatLabel data-type='StatLabel' fontSize='20px' fontWeight='bold' color='#1A365D' mb='10px'>{key}</StatLabel>
                                {
                                    props.datas[key].map(item => {
                                        if(item.label === undefined) {
                                            return (
                                                <Box>
                                                        <StatLabel data-type='StatLabel' fontSize='18px' fontWeight='semibold' color='#2C5282'>Total</StatLabel>
                                                        <StatNumber data-type='StatNumber' fontSize='24' me='6px' color='#2A4365'>Rp {item.value}</StatNumber>
                                                </Box>
   
                                            )
                                        } 
                                        return (
                                
                                            <Flex color='black' minWidth='max-content'>
                                                <StatLabel data-type='StatLabel' fontSize='18px' me='6px'>{item.label}</StatLabel><Text fontSize='14px' fontWeight='semibold'>{item.labeltype}</Text>
                                                <Spacer />
                                                {
                                                    item.valuetype === 'rp' ?
                                                        (
                                                            <>
                                                                <StatNumber data-type='StatNumber' fontSize='18px' me='6px'>{formatRupiah(item.value)}</StatNumber>
                                                            </>
                                                        ) :
                                                        <>
                                                            <StatNumber data-type='StatNumber' fontSize='18px' me='6px'>{item.value}</StatNumber>
                                                            <Text fontSize='14px' fontWeight='semibold'>{item.valuetype}</Text>
                                                        </> // or any other fallback value
                                                }
                                                {/* <StatHelpText data-type='StatHelpText'>
                                                                <StatArrow data-type='StatArrow' type='increase'></StatArrow>
                                                                    23.36%
                                                                </StatHelpText> */}
                                            </Flex>
                                        )
                                    })
                                }
                            </Stat>
                        </CardBody>
                    </Card>
                )
            })
            }

        </SimpleGrid>
    )
}