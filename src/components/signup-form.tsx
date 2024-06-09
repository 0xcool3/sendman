"use client";

import type { InputProps } from "@nextui-org/react";

import React from "react";
import {
  Input,
  Checkbox,
  Link,
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
import Editor from "@monaco-editor/react";
import { ChevronDownIcon } from "./ChevronDownIcon";
import { UserIcon } from "./UserIcon";

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

    return (
      <>
        <div className="text-3xl font-bold leading-9 text-default-foreground">
          Welcome to Sendman 👋
        </div>
        <div className="py-2 text-medium text-default-500">
          Already have an account?
          <Link className="ml-2 text-secondary underline" href="#" size="md">
            Sign In
          </Link>
        </div>

        <form
          ref={ref}
          {...props}
          className={cn(
            "flex grid grid-cols-12 flex-col gap-4 py-8",
            className
          )}
        >
          <ButtonGroup fullWidth className="col-span-12" variant="faded">
            <Button color="primary" variant="flat" startContent={<UserIcon />}>
              Select 0x913Aa323127A2E1E5604bD84D3f3d8B929215f52
            </Button>
            <Button isIconOnly color="primary" variant="flat" onPress={onOpen}>
              <ChevronDownIcon />
            </Button>
          </ButtonGroup>
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
          <Input
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
          </Checkbox>
        </form>
        <Editor
          theme="vs-dark"
          className="rounded-lg "
          height={"20vh"}
          defaultLanguage="javascript"
          defaultValue="// some comment"
        />
      </>
    );
  }
);

SignUpForm.displayName = "SignUpForm";

export default SignUpForm;
