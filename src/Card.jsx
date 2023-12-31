"use client";
import { Button, Card, Popover } from "keep-react";
import {
  ArchiveTray,
  CaretRight,
  DotsThreeVertical,
  PencilCircle,
} from "phosphor-react";

const CardComponent = () => {
  return (
    <>
      <Card className="p-6 mt-20 max-w-xl">
        <Card.Container className="flex items-start md:gap-5 gap-3.5">
          <Card.Container className="flex items-center justify-center rounded-full bg-metal-50 md:p-4 p-2.5">
            <ArchiveTray size={28} color="#3D4A5C" />
          </Card.Container>
          <Card.Container className="flex flex-col gap-2">
            <Card.Title>Keep React</Card.Title>
            <Card.Description>
              Component design systems can help developers to be more productive
              by providing them with a ready-made set of components to use.
            </Card.Description>
            <Card.Link
              href="/"
              icon={<CaretRight size={16} color="#1B4DFF" />}
              iconPosition="left"
            >
              Learn More
            </Card.Link>
          </Card.Container>
        </Card.Container>
      </Card>
      <Card className="p-6 mt-4 max-w-xl">
        <Card.Container className="flex gap-5">
          <Card.Container className="flex items-start gap-5">
            <Card.Container className="flex items-center justify-start rounded-full bg-metal-50 md:p-4 p-2.5">
              <ArchiveTray size={28} color="#3D4A5C" />
            </Card.Container>
            <Card.Container className="flex flex-col gap-2">
              <Card.Title>Keep React</Card.Title>
              <Card.Description>
                Component design systems can help developers to be more
                productive by providing them with a ready-made set of components
                to use.
              </Card.Description>
            </Card.Container>
          </Card.Container>
          <Card.Container className="hidden items-start md:flex">
            <Popover className="!w-[20rem]">
              <Popover.Title>Keep Design System</Popover.Title>
              <Popover.Action>
                <DotsThreeVertical
                  size={24}
                  color="#5E718D"
                  className="flex cursor-pointer items-start"
                />
              </Popover.Action>
            </Popover>
          </Card.Container>
        </Card.Container>
      </Card>
      <Card className="md:p-6 mt-4 p-5 max-w-[280px]">
        <Card.Container className="flex items-center justify-center">
          <PencilCircle size={80} color="#1B4DFF" />
        </Card.Container>
        <Card.Container className="text-center">
          <Card.Title>Keep React</Card.Title>
          <Card.Description>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Card.Description>
        </Card.Container>
        <Card.Container className="mt-3 flex items-center justify-center">
          <Button type="outlinePrimary" className="!hidden md:!block">
            Learn More
          </Button>
          <Button type="outlinePrimary" size="sm" className="md:hidden block">
            Learn More
          </Button>
        </Card.Container>
      </Card>
    </>
  );
};

export default CardComponent;
