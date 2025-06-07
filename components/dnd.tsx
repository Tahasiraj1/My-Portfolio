// ./dnd.tsx
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useDroppable } from "@dnd-kit/core";

export const Draggable = ({ id, children }: {
  id: string;
  children: (props: {
    setNodeRef: (node: HTMLElement | null) => void;
    style: React.CSSProperties;
    dragHandleProps: object;
    isDragging: boolean;
    isOver: boolean;
  }) => React.ReactNode;
}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const {
    setNodeRef: setDroppableNodeRef,
    isOver,
  } = useDroppable({ id });

  // Combine both refs: droppable + sortable
  const combinedRef = (node: HTMLElement | null) => {
    setNodeRef(node);
    setDroppableNodeRef(node);
  };

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return children({
    setNodeRef: combinedRef,
    style,
    dragHandleProps: { ...attributes, ...listeners },
    isDragging,
    isOver,
  });
};
