import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { getComponent } from "./getComponents";
import $ from "jquery"
import {
  motionComponents,
  looksComponents,
  controlComponents,
  eventsComponents,
} from "./SidebarConstants";

export default function Sidebar() {
  return (
    <div className="flex flex-row">
      <div
        style={{
          width: "50px",
          padding: "5px",
          borderRight: "2px solid black",
        }}
      >
        <div
          onClick={() => {
            const section = document.querySelector("#motion");
            section.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          style={{
            borderRadius: "100%",
            backgroundColor: "blue",
            padding: "20px",
          }}
        ></div>
        <div style={{ fontSize: "12px" }}>Motion</div>
        <div
          onClick={() => {
            const section = document.querySelector("#looks");
            section.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          style={{
            borderRadius: "100%",
            backgroundColor: "purple",
            padding: "20px",
          }}
        ></div>
        <div style={{ fontSize: "12px" }}>Looks</div>
        <div
          onClick={() => {
            const section = document.querySelector("#control");
            section.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          style={{
            borderRadius: "100%",
            backgroundColor: "orange",
            padding: "20px",
          }}
        ></div>
        <div style={{ fontSize: "12px" }}>Control</div>
        <div
          onClick={() => {
            const section = document.querySelector("#events");
            section.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          style={{
            borderRadius: "100%",
            backgroundColor: "yellow",
            padding: "20px",
          }}
        ></div>
        <div style={{ fontSize: "12px" }}>Events</div>
      </div>
      <div className="w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">
        {/* Motion */}
        <div className="font-bold" id="motion">
          {" "}
          {"Motion"}{" "}
        </div>
        <Droppable droppableId="sideArea-motion" type="COMPONENTS">
          {(provided) => (
            <ul
              className="sideArea-motion my-3"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {motionComponents.map((x, i) => {
                return (
                  <Draggable
                    key={`${x}-sideArea`}
                    draggableId={`${x}-sideArea`}
                    index={i}
                  >
                    {(provided) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="my-2"
                      >
                        {getComponent(x)}
                      </li>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>

        {/* Looks */}
        <div className="font-bold" id="looks">
          {" "}
          {"Looks"}{" "}
        </div>
        <Droppable droppableId="sideArea-looks" type="COMPONENTS">
          {(provided) => (
            <ul
              className="sideArea-looks my-3"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {looksComponents.map((x, i) => {
                return (
                  <Draggable
                    key={`${x}-sideArea`}
                    draggableId={`${x}-sideArea`}
                    index={i}
                  >
                    {(provided) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="my-2"
                      >
                        {getComponent(x)}
                      </li>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>

        {/* Control */}
        <div className="font-bold" id="control"> {"Control"} </div>
        <Droppable droppableId="sideArea-control" type="COMPONENTS">
          {(provided) => (
            <ul
              className="sideArea-control my-3"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {controlComponents.map((x, i) => {
                return (
                  <Draggable
                    key={`${x}-sideArea`}
                    draggableId={`${x}-sideArea`}
                    index={i}
                  >
                    {(provided) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="my-2"
                      >
                        {getComponent(x)}
                      </li>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>

        {/* Events */}
        <div className="font-bold" id="events"> {"Events"} </div>
        <Droppable droppableId="sideArea-motion" type="COMPONENTS">
          {(provided) => (
            <ul
              className="sideArea-motion my-3"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {eventsComponents.map((x, i) => {
                return (
                  <Draggable
                    key={`${x}-sideArea`}
                    draggableId={`${x}-sideArea`}
                    index={i}
                  >
                    {(provided) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="my-2"
                      >
                        {getComponent(x)}
                      </li>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </div>
    </div>
  );
}
