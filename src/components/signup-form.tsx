"use client";

import type { InputProps } from "@nextui-org/react";

import React, { useEffect } from "react";
import {
  Input,
  Checkbox,
  Link,
  Spacer,
  ButtonGroup,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  RadioGroup,
  Radio,
} from "@nextui-org/react";

import { cn } from "@/utils/cn";
import Editor, { useMonaco } from "@monaco-editor/react";
import iplastic from "@/constants/iplastic";
import { ChevronDownIcon } from "./ChevronDownIcon";
import { UserIcon } from "./UserIcon";
// import { ConnectButton } from "./ConnectButton";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useTheme } from "next-themes";
import ListTable from "./ListTable";

export type SignUpFormProps = React.HTMLAttributes<HTMLFormElement>;

const SignUpForm = React.forwardRef<HTMLFormElement, SignUpFormProps>(
  ({ className, ...props }, ref) => {
    const inputProps: Pick<InputProps, "labelPlacement" | "classNames"> = {
      labelPlacement: "outside",
      classNames: {
        label:
          "text-small font-medium text-default-700 group-data-[filled-within=true]:text-default-700",
      },
    };
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [modalPlacement, setModalPlacement] = React.useState("auto");

    function handleEditorChange(value, event) {
      console.log("here is the current model value:", value);
    }

    const { theme, themes, resolvedTheme } = useTheme();
    const monaco = useMonaco();

    useEffect(() => {
      console.log({ theme, themes, resolvedTheme });
    }, [theme, themes]);

    useEffect(() => {
      // or make sure that it exists by other ways
      if (monaco) {
        monaco.editor.defineTheme("iplastic", iplastic);

        if (resolvedTheme == "dark") {
          monaco.editor.setTheme("vs-dark");
        } else {
          monaco.editor.setTheme("iplastic");
        }
        //
        console.log("here is the monaco instance:", monaco);
      }
    }, [monaco, resolvedTheme]);

    return (
      <>
        <div className="text-xl md:text-3xl font-bold leading-9 text-default-foreground sm2:hidden block">
          Welcome to Sendman 👋
        </div>
        <div className="py-2 text-medium text-default-500">
          Select the assets to send and fill in the recipient's address.
          {/* <Link className="ml-2 text-secondary underline" href="#" size="md">
            Sign In
          </Link> */}
        </div>

        <form
          ref={ref}
          {...props}
          className={cn(
            "flex grid grid-cols-12 flex-col gap-4 py-8",
            className
          )}
        >
          {/* <div className="col-span-12">
            <ConnectButton />
          </div> */}

          <div className="col-span-12 flex">
            <ButtonGroup variant="faded">
              <Button
                onPress={onOpen}
                color="primary"
                variant="flat"
                startContent={<UserIcon />}
                endContent={<ChevronDownIcon />}
              >
                Select Token
              </Button>
              {/* <Button
                isIconOnly
                color="primary"
                variant="flat"
                onPress={onOpen}
              >
                <ChevronDownIcon />
              </Button> */}
            </ButtonGroup>
          </div>

          <Modal
            isOpen={isOpen}
            placement={modalPlacement}
            onOpenChange={onOpenChange}
          >
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    Modal Title
                  </ModalHeader>
                  <ModalBody>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nullam pulvinar risus non risus hendrerit venenatis.
                      Pellentesque sit amet hendrerit risus, sed porttitor quam.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nullam pulvinar risus non risus hendrerit venenatis.
                      Pellentesque sit amet hendrerit risus, sed porttitor quam.
                    </p>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Close
                    </Button>
                    <Button color="primary" onPress={onClose}>
                      Action
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
          {/* <Input
            className="col-span-12  md:col-span-6"
            label="First Name"
            name="first-name"
            placeholder="Type your first name here"
            {...inputProps}
          />

          <Input
            className="col-span-12 md:col-span-6"
            label="Last Name"
            name="last-name"
            placeholder="Type your last name here"
            {...inputProps}
          />

          <Input
            className="col-span-12 md:col-span-6"
            label="Email"
            name="email"
            placeholder="john.doe@gmail.com"
            type="email"
            {...inputProps}
          />

          <Input
            className="col-span-12 md:col-span-6"
            label="Confirm Email"
            name="confirm-email"
            placeholder="john.doe@gmail.com"
            type="email"
            {...inputProps}
          />

          <Input
            className="col-span-12 md:col-span-6"
            label="Password"
            name="password"
            placeholder="*********"
            type="password"
            {...inputProps}
          />

          <Input
            className="col-span-12 md:col-span-6"
            label="Confirm Password"
            name="confirm-password"
            placeholder="*********"
            type="password"
            {...inputProps}
          />

          <Checkbox
            defaultSelected
            className="col-span-12 m-0 p-2 text-left"
            color="secondary"
            name="terms-and-privacy-agreement"
            size="md"
          >
            I read and agree with the
            <Link className="mx-1 text-secondary underline" href="#" size="md">
              Terms
            </Link>
            <span>and</span>
            <Link className="ml-1 text-secondary underline" href="#" size="md">
              Privacy Policy
            </Link>
            .
          </Checkbox> */}
        </form>
        <Editor
          height={"40vh"}
          options={{
            fontSize: 14,
          }}
          onChange={handleEditorChange}
          defaultValue="// some comment"
          theme="vs-dark"
          defaultLanguage="bat"
          // className="rounded-lg "
          className="my-custom-editor"
        />
        <Spacer y={8} />
        <ListTable />
      </>
    );
  }
);

SignUpForm.displayName = "SignUpForm";

export default SignUpForm;
