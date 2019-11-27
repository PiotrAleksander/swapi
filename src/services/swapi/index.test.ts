import api from ".";
import { ResourceType } from "../../types/enums/ResourceTypeEnum";
import { firstStarship as mockedResource } from "../../../mocks";

describe("SWAPI", () => {
  let mockedFetch: jest.Mock;
  beforeEach(() => {
    mockedFetch = jest.fn();
    mockedFetch.mockResolvedValue({
      json: async () => mockedResource
    });
    window.fetch = mockedFetch;
  });

  it("should fetch default resource count", async () => {
    mockedFetch.mockResolvedValueOnce({
      json: async () => ({ count: 5 })
    });
    const count = await api.fetchResourceCount();

    expect(mockedFetch).toBeCalledWith("https://swapi.co/api/people/", {
      mode: "no-cors"
    });
    expect(count).toEqual(5);
  });

  it("should fetch with default value", async () => {
    await api.fetchResource();

    expect(mockedFetch).toBeCalledWith("https://swapi.co/api/people/0/", {
      mode: "no-cors"
    });
  });

  it("should fetch from given resource type", async () => {
    await api.fetchResource(ResourceType.STARSHIPS);

    expect(mockedFetch).toBeCalledWith("https://swapi.co/api/starships/0/", {
      mode: "no-cors"
    });
  });

  it("should fetch mocked resource", async () => {
    const resource = await api.fetchResource();

    expect(resource).toBe(mockedResource);
  });
});
