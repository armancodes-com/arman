import { act, renderHook } from "@testing-library/react";
import { useLocalStorageState } from "../useLocalStorage";

describe("useLocalStorage tests suite", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should initialize the state when there is no data for the given key", () => {
    const { result } = renderHook(() =>
      useLocalStorageState("light", "test-theme"),
    );
    // our custom hook returns an array [value, setValue function]
    const [value] = result.current;

    expect(value).toBe("light");
  });

  it("should return the value of the given key when there is already a data", () => {
    localStorage.setItem("test-theme", JSON.stringify("dark"));

    const { result } = renderHook(() =>
      useLocalStorageState("light", "test-theme"),
    );

    expect(result.current[0]).toBe("dark");
  });

  it("should update the state and localStorage when the setter is called", () => {
    const { result } = renderHook(() =>
      useLocalStorageState("dark", "test-theme"),
    );

    act(() => {
      // call the setter function
      result.current[1]("light");
    });

    expect(result.current[0]).toBe("light");
  });

  it("should update the localStorage when the key changes", () => {
    const { result, rerender } = renderHook(
      ({ key }) => useLocalStorageState("light", key),
      {
        initialProps: { key: "test-key" }, // setting the value of 'key'
      },
    );

    // the initial
    expect(result.current[0]).toBe("light");

    // setValue
    act(() => {
      result.current[1]("new-value");
    });

    // expect the localStorage to have the updated value with the key given
    expect(JSON.parse(localStorage.getItem("test-key")!)).toBe("new-value");

    // re-rendering the state update by changing the key
    rerender({ key: "new-test-key" });

    act(() => {
      result.current[1]("new-key-value");
    });
    // expect the key to have changed
    expect(JSON.parse(localStorage.getItem("new-test-key")!)).toBe(
      "new-key-value",
    ); // the key is updated
  });

  it("should return the state and its updater function", () => {
    const { result } = renderHook(() =>
      useLocalStorageState("initialValue", "test-key"),
    );

    expect(result.current[0]).toBe("initialValue");
    expect(typeof result.current[1]).toBe("function");
  });
});
