// Chakra imports
import {
  Box,
  Button,
  Flex,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import LineChart from "components/charts/LineChart";
import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import { MdBarChart, MdOutlineCalendarToday } from "react-icons/md";
// Assets
import { RiArrowUpSFill } from "react-icons/ri";
import {
  lineChartDataTotalSpent,
  lineChartOptionsTotalSpent,
} from "variables/charts";

import Dropzone from "views/admin/profile/components/Dropzone";

import { MdUpload } from "react-icons/md";

export default function TotalSpent(props) {
  const { ...rest } = props;

  // Chakra Color Mode

  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const brandColor = useColorModeValue("brand.500", "white");

  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = useColorModeValue("secondaryGray.600", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const iconColor = useColorModeValue("brand.500", "white");
  const bgButton = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const bgHover = useColorModeValue(
    { bg: "secondaryGray.400" },
    { bg: "whiteAlpha.50" }
  );
  const bgFocus = useColorModeValue(
    { bg: "secondaryGray.300" },
    { bg: "whiteAlpha.100" }
  );
  return (
    <Card
      justifyContent='center'
      align='center'
      direction='column'
      w='100%'
      mb='0px'
      style={{ padding: "20px" }}
      {...rest}>
      <Flex direction="row">
        <Flex direction="column" width="80%">
          <Flex px='25px' justify='space-between' mb='20px' align='center'>
            <Text
              color={textColor}
              fontSize='24px'
              fontWeight='700'
              paddingTop='20px'
              lineHeight='100%'>
              Send Files
            </Text>
          </Flex>
          <Flex px='25px' mb="20px" h="200px" w='100%' flexDirection={{ base: "column", lg: "row" }}>
            <Dropzone
              me='36px'
              w='100%'
              maxH={{ base: "60%", lg: "50%", "2xl": "100%" }}
              minH={{ base: "100%", lg: "50%", "2xl": "100%" }}
              content={
                <Box>
                  <Icon as={MdUpload} w='40px' h='40px' color={brandColor} />
                  <Flex justify='center' mx='auto' mb='12px'>
                    <Text fontSize='xl' fontWeight='700' color={brandColor}>
                      Upload Files
                    </Text>
                  </Flex>
                  <Text fontSize='sm' fontWeight='500' color='secondaryGray.500'>
                    PNG, JPG and GIF files are allowed
                  </Text>
                </Box>
              }
            />
          </Flex>
        </Flex>
        <img src={require("assets/img/sw_bg.jpeg")} alt="sw_bg" style={{ width: "20%", borderRadius: "20px", marginLeft: "auto" }} />
      </Flex>

    </Card>
  );
}
