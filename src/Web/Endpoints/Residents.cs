using Microsoft.AspNetCore.Http.HttpResults;
using SmartLGU.Application.Residents.Commands.RegisterResident;
using SmartLGU.Application.Residents.Dtos;
using SmartLGU.Application.Residents.Queries.GetResidentById;
using SmartLGU.Application.Residents.Queries.GetResidents;

namespace SmartLGU.Web.Endpoints;

public class Residents : IEndpointGroup
{
    public static void Map(RouteGroupBuilder groupBuilder)
    {
        groupBuilder.MapGet(GetResidents);
        groupBuilder.MapGet(GetResidentById, "{id}");
        groupBuilder.MapPost(RegisterResident);
    }

    [EndpointSummary("Get registered residents")]
    [EndpointDescription("Retrieves mock resident registration records with optional search, barangay, and status filters.")]
    public static async Task<Ok<IReadOnlyCollection<ResidentDto>>> GetResidents(
        ISender sender,
        string? search,
        string? barangay,
        string? status)
    {
        var residents = await sender.Send(new GetResidentsQuery(search, barangay, status));

        return TypedResults.Ok(residents);
    }

    [EndpointSummary("Get a resident profile")]
    [EndpointDescription("Retrieves a single mock resident registration profile by ID.")]
    public static async Task<Results<Ok<ResidentDto>, NotFound>> GetResidentById(ISender sender, int id)
    {
        var resident = await sender.Send(new GetResidentByIdQuery(id));

        return resident is null ? TypedResults.NotFound() : TypedResults.Ok(resident);
    }

    [EndpointSummary("Register a resident")]
    [EndpointDescription("Captures a prototype resident registration request using mock data only.")]
    public static async Task<Created<ResidentDto>> RegisterResident(ISender sender, RegisterResidentCommand command)
    {
        var resident = await sender.Send(command);

        return TypedResults.Created($"/api/Residents/{resident.Id}", resident);
    }
}
