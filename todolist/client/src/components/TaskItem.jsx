import React from "react";
import { useState } from "react";
import {
  Pencil,
  Trash2,
  Briefcase,
  User,
  ShoppingCart,
  Heart,
  DollarSign,
  BookOpen,
  Home,
  Tag,
  Check,
} from "lucide-react";

function TaskItem({
  id,
  title,
  description,
  category,
  createdAt,
  isDone,
  onDelete,
  onToggle,
  onEdit,
}) {
  const [isEdit, setIsEdit] = useState(false);
  const [titleInput, setTitleInput] = useState(title);
  const [descriptionInput, setDescriptionInput] = useState(description);

  function getCategoryBadge(category) {
    switch (category) {
      case "Work":
        return (
          <span className="p-2 rounded-full bg-blue-100">
            <Briefcase size={24} className="text-blue-500" />
          </span>
        );
      case "Personal":
        return (
          <span className="p-2 rounded-full bg-purple-100">
            <User size={24} className="text-purple-500" />
          </span>
        );
      case "Shopping":
        return (
          <span className="p-2 rounded-full bg-yellow-100">
            <ShoppingCart size={24} className="text-yellow-500" />
          </span>
        );
      case "Health":
        return (
          <span className="p-2 rounded-full bg-red-100">
            <Heart size={24} className="text-red-500" />
          </span>
        );
      case "Finance":
        return (
          <span className="p-2 rounded-full bg-green-100">
            <DollarSign size={24} className="text-green-500" />
          </span>
        );
      case "Education":
        return (
          <span className="p-2 rounded-full bg-cyan-100">
            <BookOpen size={24} className="text-cyan-500" />
          </span>
        );
      case "Home":
        return (
          <span className="p-2 rounded-full bg-orange-100">
            <Home size={24} className="text-orange-500" />
          </span>
        );
      default:
        return (
          <span className="p-2 rounded-full bg-gray-100">
            <Tag size={24} className="text-gray-500" />
          </span>
        );
    }
  }

  return (
    <div
      className={`card bg-base-100 shadow-md p-4 border border-base-200 ${isDone ? "opacity-60" : ""}`}
    >
      <div className="flex items-start gap-4">
        {/* Category Icon */}
        {getCategoryBadge(category)}

        {/* Content */}
        <div className="flex-1">
          {/* Title + Buttons */}
          <div className="flex items-center justify-between">
            {isEdit ? (
              <input
                type="text"
                value={titleInput}
                onChange={(e) => setTitleInput(e.target.value)}
              />
            ) : (
              <p
                className={`font-semibold text-lg ${isDone ? "line-through text-base-content/50" : ""}`}
              >
                {title}
              </p>
            )}

            <div className="flex gap-2">
              <button className="btn btn-ghost btn-sm text-info">
                {isEdit ? (
                  <Check
                    onClick={() => {
                      setIsEdit(false);
                      onEdit(id, {
                        title: titleInput,
                        description: descriptionInput,
                      });
                    }}
                  />
                ) : (
                  <Pencil size={16} onClick={() => setIsEdit(true)} />
                )}
              </button>
              <button
                onClick={() => onDelete(id)}
                className="btn btn-ghost btn-sm text-error"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>

          {/* Description */}
          {isEdit ? (
            <input
              value={descriptionInput}
              type="text"
              onChange={(e) => setDescriptionInput(e.target.value)}
            />
          ) : (
            <p className="text-base-content/60 text-sm mt-1">{description}</p>
          )}

          {/* Footer */}
          <div className="flex items-center justify-between mt-3">
            <p className="text-xs text-base-content/40">
              {new Date(createdAt).toLocaleDateString()}
            </p>
            <input
              type="checkbox"
              className="checkbox checkbox-sm checkbox-success"
              checked={isDone}
              readOnly
              onChange={() => onToggle(id, isDone)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskItem;
