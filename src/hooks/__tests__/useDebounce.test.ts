import { act, renderHook } from "@testing-library/react";
import useDebounce from "../useDebounce";

describe("useDebounce Tests Suite", () => {
  it("should return the value given to it as a string", () => {
    const sampleInput = "sample input";
    const { result } = renderHook(() => useDebounce(sampleInput, 200));

    expect(result.current).toBe(sampleInput);
  });

  it("should debounce the value given to it", async () => {
    vi.useFakeTimers();
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      {
        initialProps: { value: "sample input", delay: 500 },
      },
    );

    // initial render
    expect(result.current).toBe("sample input");

    // update the value
    rerender({ value: "updated", delay: 500 });
    // Value should still be 'sample input' immediately after update
    expect(result.current).toBe("sample input");

    // Fast-forward time by 500 ms
    act(() => {
      vi.advanceTimersByTime(500);
    });

    expect(result.current).toBe("updated");
  });
});
