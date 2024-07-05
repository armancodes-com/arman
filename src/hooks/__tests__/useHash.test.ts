import { act, renderHook } from "@testing-library/react";
import useHash from "../useHash";

describe("useHash custom hook tests suite", () => {
  it("should have empty string as initial value", () => {
    const { result } = renderHook(() => useHash());
    expect(result.current).toBe("");
  });

  it("should add a hashChange event listener when mounted", () => {
    // mock addEventListener
    const addEventListenerMocked = vi.spyOn(window, "addEventListener");

    renderHook(() => useHash());

    expect(addEventListenerMocked).toHaveBeenCalledWith(
      "hashchange",
      expect.any(Function),
    );
    addEventListenerMocked.mockRestore();
  });

  it("should remove the hashChange event on unmounted", () => {
    const removeEventListenerSpy = vi.spyOn(window, "removeEventListener");
    const { unmount } = renderHook(() => useHash());
    // make the hook unmount by calling unmount fn
    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      "hashchange",
      expect.any(Function),
    );
    removeEventListenerSpy.mockRestore();
  });

  it("should update hash state when the hash changes", () => {
    const { result } = renderHook(() => useHash());

    // act updating the hash
    act(() => {
      window.location.hash = "sample-hash";
      window.dispatchEvent(new HashChangeEvent("hashchange"));
    });

    expect(result.current).toBe("#sample-hash");
  });
});
