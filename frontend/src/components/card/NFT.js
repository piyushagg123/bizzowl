// Chakra imports
import {
  AvatarGroup,
  Avatar,
  Box,
  Button,
  Flex,
  Icon,
  Image,
  // Link,
  Text,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Select,
  Textarea,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
// Assets
import React, { useState } from "react";
import { IoHeart, IoHeartOutline } from "react-icons/io5";

export default function NFT(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { image, name, author, bidders, download, currentbid } = props;
  const [like, setLike] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => {
    setIsOpen(false);
    setIsModalOpen(false);
  };
  const cancelRef = React.useRef();

  const textColor = useColorModeValue("navy.700", "white");
  const textColorBid = useColorModeValue("brand.500", "white");

  const options = ["Two Weeks", "One Month", "Two Month", "Three Month +"];

  const handleSubmit = () => {
    // Code to handle form submission (e.g., send form data to the server, etc.)
    setIsOpen(true); // Trigger confirmation dialog on successful form submission
  };

  return (
    <Card p="20px">
      <Flex direction={{ base: "column" }} justify="center">
        <Box mb={{ base: "20px", "2xl": "20px" }} position="relative">
          <Image
            src={image}
            w={{ base: "100%", "3xl": "100%" }}
            h={{ base: "100%", "3xl": "100%" }}
            borderRadius="20px"
          />
          <Button
            position="absolute"
            bg="white"
            _hover={{ bg: "whiteAlpha.900" }}
            _active={{ bg: "white" }}
            _focus={{ bg: "white" }}
            p="0px !important"
            top="14px"
            right="14px"
            borderRadius="50%"
            minW="36px"
            h="36px"
            onClick={() => {
              setLike(!like);
            }}
          >
            <Icon
              transition="0.2s linear"
              w="20px"
              h="20px"
              as={like ? IoHeart : IoHeartOutline}
              color="brand.500"
            />
          </Button>
        </Box>
        <Flex flexDirection="column" justify="space-between" h="100%">
          <Flex
            justify="space-between"
            direction={{
              base: "row",
              md: "column",
              lg: "row",
              xl: "column",
              "2xl": "row",
            }}
            mb="auto"
          >
            <Flex direction="column">
              <Text
                color={textColor}
                fontSize={{
                  base: "xl",
                  md: "lg",
                  lg: "lg",
                  xl: "lg",
                  "2xl": "md",
                  "3xl": "lg",
                }}
                mb="5px"
                fontWeight="bold"
                me="14px"
              >
                {name}
              </Text>
              {/* <Text
                color="secondaryGray.600"
                fontSize={{
                  base: "sm",
                }}
                fontWeight="400"
                me="14px"
              >
                {author}
              </Text> */}
            </Flex>
            <AvatarGroup
              max={3}
              color={textColorBid}
              size="sm"
              mt={{
                base: "0px",
                md: "10px",
                lg: "0px",
                xl: "10px",
                "2xl": "0px",
              }}
              fontSize="12px"
            >
              {bidders.map((avt, key) => (
                <Avatar key={key} src={avt} />
              ))}
            </AvatarGroup>
          </Flex>
          <Flex
            align="start"
            justify="space-between"
            direction={{
              base: "row",
              md: "column",
              lg: "row",
              xl: "column",
              "2xl": "row",
            }}
            mt="25px"
          >
            <Text fontWeight="700" fontSize="sm" color={textColorBid}>
              Estimated Price: {currentbid}
            </Text>
            {/* <Link
              href={download}
              mt={{
                base: "0px",
                md: "10px",
                lg: "0px",
                xl: "10px",
                "2xl": "0px",
              }}
            > */}
            <Button
              variant="darkBrand"
              color="white"
              fontSize="sm"
              fontWeight="500"
              borderRadius="70px"
              px="24px"
              py="5px"
              mt={{
                base: "0px",
                md: "10px",
                lg: "0px",
                xl: "10px",
                "2xl": "0px",
              }}
              onClick={() => setIsModalOpen(true)}
            >
              Get Quotation
            </Button>
            {/* </Link> */}
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Tell us about your business</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <form style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    <FormControl id="industry" mb="4">
                      <FormLabel>Industry Of Business</FormLabel>
                      <Select placeholder="Select industry">
                        <option value="banking&finance">
                          Banking & Finance
                        </option>
                        <option value="logistics&transportation">
                          Logistics & Transportation
                        </option>
                        <option value="healthcare&medical">
                          Healthcare & Medical
                        </option>
                        <option value="education&learning">
                          Education & Learning
                        </option>
                        <option value="fashion&lifestyle">
                          Fashion & Lifestyle
                        </option>
                        <option value="food&beverage">Food & Beverage</option>
                        <option value="gaming">Gaming</option>
                        <option value="tourism">Tourism</option>
                        <option value="realestate">Real Estate</option>
                        <option value="e-commerce">E-commerce</option>
                        <option value="other">Other</option>
                      </Select>
                    </FormControl>

                    <FormControl id="timeline" mb="4">
                      <FormLabel>Timeline of Project</FormLabel>
                      <Select placeholder="Select timeline">
                        {options.map((option, index) => (
                          <option key={index} value={option}>
                            {option}
                          </option>
                        ))}
                      </Select>
                    </FormControl>

                    <FormControl id="budget" mb="4">
                      <FormLabel>Budget</FormLabel>
                      <Select placeholder="Select budget">
                        <option value="0-5k">0-5 k</option>
                        <option value="5-25k">5-25 k</option>
                        <option value="25-50k">25-50 k</option>
                        <option value="50-100k">50-100 k</option>
                      </Select>
                    </FormControl>

                    <FormControl id="projectRequirements" mb="4">
                      <FormLabel>Project Requirements</FormLabel>
                      <Textarea placeholder="Type your project requirements" />
                    </FormControl>

                    <Button
                      colorScheme="blue"
                      type="submit"
                      onClick={handleSubmit}
                    >
                      Send
                    </Button>
                  </form>
                </ModalBody>
              </ModalContent>
            </Modal>
            <AlertDialog
              isOpen={isOpen}
              leastDestructiveRef={cancelRef}
              onClose={onClose}
            >
              <AlertDialogOverlay>
                <AlertDialogContent>
                  <AlertDialogHeader>Details Submitted</AlertDialogHeader>
                  <AlertDialogBody>
                    Your details have been submitted successfully. The actual
                    price will be updated to your WhatsApp number within 1 hour.
                  </AlertDialogBody>
                  <AlertDialogFooter>
                    <Button ref={cancelRef} onClick={onClose}>
                      OK
                    </Button>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialogOverlay>
            </AlertDialog>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
}
